// 使用 require 导入 JSON 文件以避免 TypeScript 的 JSON 模块解析问题
const defaultTemplate = require('./default.json');
const minimalTemplate = require('./minimal.json');
const scarletTemplate = require('./scarlet.json');
const orangeTemplate = require('./orange.json');
const elegantTemplate = require('./elegant.json');
const darkTemplate = require('./dark.json');
const academicTemplate = require('./academic.json');
const yebanTemplate = require('./yeban.json');
const yebanOrangeTemplate = require('./yeban-orange.json');
const darkgreenTemplate = require('./darkgreen.json');
const brownTemplate = require('./brown.json');
// 新增模板
const playfulTemplate = require('./playful.json');
const blackboardTemplate = require('./blackboard.json');
const adventureTemplate = require('./adventure.json');
const warmthTemplate = require('./warmth.json');
const gameuiTemplate = require('./gameui.json');

export const templates = {
    default: defaultTemplate,
    minimal: minimalTemplate,
    scarlet: scarletTemplate,
    orange: orangeTemplate,
    elegant: elegantTemplate,
    dark: darkTemplate,
    academic: academicTemplate,
    yeban: yebanTemplate,
    'yeban-orange': yebanOrangeTemplate,
    darkgreen: darkgreenTemplate,
    brown: brownTemplate,
    // 新增导出
    playful: playfulTemplate,
    blackboard: blackboardTemplate,
    adventure: adventureTemplate,
    warmth: warmthTemplate,
    gameui: gameuiTemplate,
};