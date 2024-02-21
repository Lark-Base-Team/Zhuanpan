/**
 *  [FilterOperator.Contains]: {
 *             value: FilterOperator.Contains,
 *             label: t('FilterOperator.Contains')
 *         },
 *         [FilterOperator.DoesNotContain]: {
 *             value: FilterOperator.DoesNotContain,
 *             label: t('FilterOperator.DoesNotContain')
 *         },
 *         [FilterOperator.IsEmpty]: {
 *             value: FilterOperator.IsEmpty,
 *             label: t('FilterOperator.IsEmpty')
 *         },
 *         [FilterOperator.IsNotEmpty]: {
 *             value: FilterOperator.IsNotEmpty,
 *             label: t('FilterOperator.IsNotEmpty')
 *         },
 *         [FilterOperator.Is]: {
 *             value: FilterOperator.Is,
 *             label: t('FilterOperator.Is')
 *         },
 *         [FilterOperator.IsNot]: {
 *             value: FilterOperator.IsNot,
 *             label: t('FilterOperator.IsNot')
 *         },
 *         [FilterOperator.IsGreater]: {
 *             value: FilterOperator.IsGreater,
 *             label: t('FilterOperator.IsGreater')
 *         },
 *         [FilterOperator.IsGreaterEqual]: {
 *             value: FilterOperator.IsGreaterEqual,
 *             label: t('FilterOperator.IsGreaterEqual')
 *         },
 *         [FilterOperator.IsLess]: {
 *             value: FilterOperator.IsLess,
 *             label: t('FilterOperator.IsLess')
 *         },
 *         [FilterOperator.IsLessEqual]: {
 *             value: FilterOperator.IsLessEqual,
 *             label: t('FilterOperator.IsLessEqual')
 *         },
 *
 *
 *
 */


const config = [
    ['请点击【打开大转盘】按钮开始使用', '请点击【打开大转盘】按钮开始使用', 'please tap the 【open the big turntable】 button to start using'],
    ['使用转盘时不要关闭此页面', '使用转盘时不要关闭此页面', 'do not close this page while using the turntable'],
    ['转盘必须从当前页面打开', '转盘必须从当前页面打开', 'the turntable must be opened from the current page'],
    ['不然无法保存转盘', '不然无法保存转盘', 'otherwise the turntable cannot be saved'],
    ['加入"转盘插件"讨论群', '加入"转盘插件"讨论群', 'join the "turntable plugin" discussion group'],
    ['打开大转盘', '打开大转盘', 'open the big turntable'],
    [' 飞书客户端暂不支持保存转盘信息，请在浏览器中使用此插件。',' 飞书客户端暂不支持保存转盘信息，请在浏览器中使用此插件。','lark client does not support saving turntable information, please use this plug-in in the browser.'],
]


let rr = {
    zh: {},
    en: {}
}
config.forEach(item => {
    rr.zh[item[0]] = item[1]
    rr.en[item[0]] = item[2]
})

export default rr
