<template>
    <div class="custom-scrollbar" :class="{'custom-scrollbar--hidden-scrollbar': hiddenScrollbar}"
         ref="block" :style="{'--scrollbar-x': scrollbarX + 'px'}">
        <div class="custom-scrollbar__wrap" ref="content" @scroll="contentScrollStart">
            <slot/>
        </div>
        <div class="custom-scrollbar__track" ref="track">
            <div class="custom-scrollbar__thumb" draggable="false" @mousedown="dragThumbStart" ref="thumb" :style="{height: thumbHeight + 'px'}"></div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'CustomScrollbar',
    data() {
      return {
        scrolledY: 0,
        isThumbScroll: false,
        thumbOffset: 0,
        thumbHeight: 0,
        trackHeight: 0,
        scrollbarX: 0,
        hiddenScrollbar: false
      }
    },
    methods: {
      contentScrollStart() {
        if(!this.isThumbScroll) {
          const content = this.$refs.content;
          this.scrollTo(content.scrollTop / (content.scrollHeight - content.offsetHeight));
        }
      },
      scrollTo(percent) {
        const thumb = this.$refs.thumb;

        const content = this.$refs.content;
        const contentHeight = content.scrollHeight;

        const pos = percent * (this.trackHeight - this.thumbHeight);
        thumb.style.top = `${pos}px`;

        if(this.isThumbScroll) {
          const contentPos = percent * (contentHeight - content.offsetHeight);
          content.scrollTo(0, contentPos);
        }
      },
      dragThumbMove(e) {
        const thumbHeight = this.thumbHeight;

        const track = this.$refs.track;
        const trackTop = track.getBoundingClientRect().top;
        const trackHeight = this.trackHeight;

        this.scrolledY = e.clientY - trackTop - this.thumbOffset;
        if(this.scrolledY > trackHeight - thumbHeight) {
          this.scrolledY = trackHeight - thumbHeight;
        } else if(this.scrolledY < 0) {
          this.scrolledY = 0;
        }

        const scrolledPercent = this.scrolledY / (trackHeight - thumbHeight);

        this.scrollTo(scrolledPercent);
      },
      dragThumbEnd() {
        this.isThumbScroll = false;
        document.removeEventListener('mousemove', this.dragThumbMove);
        document.removeEventListener('mouseup', this.dragThumbEnd);
      },
      dragThumbStart(e) {
        this.isThumbScroll = true;
        this.thumbOffset = e.clientY - e.target.getBoundingClientRect().top;
        document.addEventListener('mousemove', this.dragThumbMove);
        document.addEventListener('mouseup', this.dragThumbEnd);
      },
      getThumbHeight() {
        return this.$refs.content.offsetHeight / this.$refs.content.scrollHeight * this.$refs.track.offsetHeight;
      },
      getScrollbarWidth() {
        let obj = document.createElement('div');
        obj.style.overflow = 'scroll';
        obj.style.width = '100px';
        obj.style.height = '100px';
        document.body.append(obj);
        let remainderX = obj.offsetWidth - obj.clientWidth;
        obj.remove();
        return remainderX;
      },
      reinit() {
        this.scrollbarX = this.getScrollbarWidth();
        this.hiddenScrollbar = this.$refs.content.offsetHeight < this.$refs.block.offsetHeight;
        this.thumbHeight = this.getThumbHeight();
        this.trackHeight = this.$refs.track.getBoundingClientRect().height;
      }
    },
    mounted() {
      const scrollbarX = this.getScrollbarWidth();
      this.scrollbarX = scrollbarX;
      if(scrollbarX > 0) {
        this.reinit();
        window.addEventListener('resize', this.reinit);
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.reinit);
    }
  }
</script>
<style lang="scss">
    .custom-scrollbar {
        $self: &;
        position: relative;
        overflow: hidden;
        max-height: 100%;
        &__wrap {
            overflow-y: scroll;
            overflow-x: hidden;
            max-height: 100%;
            width: calc(100% + var(--scrollbar-x));
        }
        &__track {
            transition: opacity .4s;
            position: absolute;
            right: 8px;
            top: 5px;
            bottom: 5px;
            background-color: #fff;
            width: 4px;
            border-radius: 50px;
            opacity: 0;
        }
        &__thumb {
            user-select: none;
            cursor: pointer;
            width: 100%;
            background-color: #DFEAF3;
            height: 10%;
            border-radius: 2px;
            position: relative;
            &:before {
                display: block;
                content: '';
                position: absolute;
                top: -10px;
                right: -10px;
                bottom: -10px;
                left: -10px;
            }
        }
        &:active,
        &:hover {
            #{$self}__track {
                opacity: 1;
            }
        }
        &--hidden-scrollbar {
            #{$self}__track {
                visibility: hidden;
            }
        }
    }
</style>
