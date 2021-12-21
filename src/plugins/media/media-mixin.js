import Vue from 'vue';

function mediaHelper(width, desiredWidth) {
    return width && width <= desiredWidth;
}

Vue.mixin({
    computed: {
        isDesktop() {
            const width = this.$store.state.windowWidth;
            return width && width > 800;
        },
        isDesktopMedium() {
            return mediaHelper(this.$store.state.windowWidth, 1250);
        },
        isDesktopSmall() {
            return mediaHelper(this.$store.state.windowWidth, 1040);
        },
        isMobile() {
            return mediaHelper(this.$store.state.windowWidth, 800);
        },
        isMobileMedium() {
            return mediaHelper(this.$store.state.windowWidth, 650);
        },
        isMobileSmall() {
            return mediaHelper(this.$store.state.windowWidth, 500);
        },
    }
});
