import Vue from 'vue'
import Picture from './Picture/index'
import VText from './VText/index'
import VButton from './VButton/index'
import Group from './Group/index'
import RectShape from './RectShape/index'

const components = {
    'Picture': Picture,
    'VText': VText,
    'VButton': VButton,
    'Group': Group,
    'RectShape': RectShape,
}

Object.entries(components).map(([k, v]) => Vue.component(k, v));
