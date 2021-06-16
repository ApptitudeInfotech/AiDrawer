# AiDrawer
Minimal Drawer React Component

![npm bundle size](https://img.shields.io/bundlephobia/min/@aiui/ai-drawer)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@aiui/ai-drawer)
![npm download](https://img.shields.io/npm/dm/@aiui/ai-drawer.svg)

## Install
    npm i @aiui/ai-drawer


## Import
    import AiDrawer from '@aiui/ai-drawer';


## Props
|   Name          |  Type  |   Default    | Description |
|-----------------|:-------|:-------------|:------------|
| opened          | bool   | false        | If true, the drawer is open |
| anchor          | string | left         | Drawer placement (left, right, top, bottom) |
| color           | string | #ffffff      | Drawer Color |
| width           | number | 280          | Drawer Width (for anchor `left` & `right`) |
| onClose         | func   | ( ) => { }   | Callback fired when the component requests to be closed |
| children        | node   |              | Drawer children |