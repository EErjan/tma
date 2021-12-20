<template>
	<component class="app-dropdown" :class="className" :is="tag" :style="style" v-click-outside="tryClose">
		<div class="app-dropdown__toggle" @click="toggle">
			<slot>
				<div class="app-dropdown__header" :class="{'is-invalid': isInvalid}">
					<p class="app-dropdown__title">
						{{ title }}
					</p>
				</div>
			</slot>
		</div>
		<select class="app-dropdown__select" :value="value" :autofocus="autofocus"
				@focus="focus" @blur="blur" @input="selectNative($event.target.value)"
				@keydown.enter.prevent="toggle" @keydown.space.prevent="toggle" @keydown.tab="preventNext"
				ref="select">
				<template v-if="list.length > 0">
					<option v-for="item in list" :key="item[itemValue]" :value="item[itemValue]">
						{{ translatable ? item[itemName][`${$store.state.clng}`] : item[itemName] }}
					</option>
				</template>
				<option value="null" v-else>No data</option>
		</select>
		<transition name="app-dropdown">
			<div v-if="visible" class="app-dropdown__menu">
				<custom-scrollbar>
					<template v-if="list.length > 0">
						<div v-for="item in list" :key="item[itemValue]" @click="select(item[itemValue])">
							<slot name="menu-item" :item="item">
								<div class="app-dropdown__item"
									:class="{'app-dropdown__item--selected': item[itemValue] === value}">
									{{ translatable ? item[itemName][`${$store.state.clng}`] : item[itemName] }}
								</div>
							</slot>
						</div>
					</template>
					<div v-else>
						<span>No data</span>
					</div>
				</custom-scrollbar>
			</div>
		</transition>
	</component>
</template>
<script>
import vClickOutside from 'v-click-outside';
import '../../assets/styles/components/app-dropdown.scss';
import CustomScrollbar from './CustomScrollbar';

export default {
	name: 'AppDropdown',
	components: {CustomScrollbar},
	directives: {clickOutside: vClickOutside.directive},
	props: {
		isInvalid: {
			type: Boolean,
			default: false
		},
		list: Array,
		value: [String, Number],
		itemName: {
			type: String,
			default: 'name'
		},
		itemValue: {
			type: String,
			default: 'value'
		},
		tag: {
			type: String,
			default: 'div'
		},
		placeholder: {
			type: String,
			default: ''
		},
		menuPosition: {
			type: String,
			validate(value) {
				return ['left', 'right'].includes(value);
			},
			default: 'left'
		},
		width: {
			type: [String, Number]
		},
		height: {
			type: [String, Number],
			default: 56
		},
		paddingX: {
			type: [String, Number],
			default: 15
		},
		radius: {
			type: [String, Number],
			default: 8
		},
		fontSize: {
			type: [String, Number],
			default: 14
		},
		lineHeight: [String, Number],
		fontWeight: {
			type: [String, Number],
			default: 400
		},
		preselectFirst: Boolean,
		autofocus: {
			type: Boolean,
			default: false
		},
		translatable: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			visible: false,
			focused: false
		}
	},
	computed: {
		title() {
			return this.selectedItem ? 
				(this.translatable ? 
				this.selectedItem[this.itemName][this.$store.state.clng] : 
				this.selectedItem[this.itemName]) : 
			this.placeholder;
		},
		selectedItem() {
			return this.list.find(item => item[this.itemValue] === this.value);
		},
		className() {
			const className = [
				'app-dropdown--menu-' + this.menuPosition,
				{
					'app-dropdown--opened': this.visible,
					'app-dropdown--focused': this.focused,
					'app-dropdown--width': this.width
				}
			];
			return className;
		},
		style() {
			const style = {
				'--height': this.height + 'px',
				'--radius': this.radius + 'px',
				'--padding-x': this.paddingX + 'px',
				'--font-size': this.fontSize + 'px',
				'--line-height': (this.lineHeight || this.fontSize) + 'px',
				'--font-weight': this.fontWeight + 'px',
			};
			if (this.width) {
				style['--width'] = this.width + 'px';
			}
			return style;
		}
	},
	methods: {
		preventNext(e) {
			if (this.visible) {
				e.preventDefault();
			}
		},
		tryClose() {
			if (this.visible) {
				this.close();
			}
		},
		selectNative(value) {
			// need to convert "numbers" from string to number
			const val = this.list.find(item => item[this.itemValue] == value)[this.itemValue];
			this.$emit('input', val);
		},
		select(value) {
			this.$emit('input', value);
			this.close();
			this.$refs.select.focus();
		},
		focus() {
			this.focused = true;
		},
		blur() {
			this.focused = false;
		},
		close() {
			this.$emit('blur');
			this.visible = false;
		},
		open() {
			this.$emit('focus');
			this.visible = true;
		},
		toggle() {
			if (this.visible) {
				this.close();
			} else {
				this.open();
			}
			this.$refs.select.focus();
		}
	},
	mounted() {
		if (this.autofocus) {
			this.$refs.select.focus();
		}
		if (this.preselectFirst && this.list.length >= 1) {
			this.$emit('input', this.list[0][this.itemValue]);
		}
	}
}
</script>