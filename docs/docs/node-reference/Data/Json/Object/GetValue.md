# 获取值

**节点类型**：`node-type:/Data/Json/Object/GetValue`

## 输入输出

| 输入名称 | 输入类型 | 输入说明 | 输出名称 | 输出类型 | 输出说明 |
| --- | --- | --- | --- | --- | --- |
| JSON对象 | JSON对象 | JSON 对象 | JSON值 | JSON值 | 取到的值 |
| 键 | 字符串 | 键名 |  |  |  |

## 作用

按键从 JSON 对象取值。

键不存在时返回 JSON null 而不是报错。
