# 节点参考

本文档按节点类型（`node-type:` URI 路径）拆分组织，每个节点一个页面。
可通过 CLI 查询：`elf program node types -t <node-type:/类型路径>` 浏览分类、`elf program node docs -t <node-type:/类型路径>` 查看节点文档。

::: tip
适用于所有节点的执行规则（求值时机、输入默认值、流程控制信号、变长节点、格式驱动节点、只读连接器，以及分支、循环、子程序调用等运行时行为）见《[节点执行规则](../docs/rules/node-execution-rules.md)》。
:::

## AI

- [加载ONNX模型](node-reference/AI/LoadONNXModel.md)
- [加载文本识别引擎](node-reference/AI/LoadOcrEngine.md)

### 推理

- [文本识别](node-reference/AI/Inference/OCR.md)
- [对象检测](node-reference/AI/Inference/ObjectDetection.md)

## 运算

- [颜色相似度](node-reference/Calculation/ColorSimilarity.md)

### 位运算

- [与](node-reference/Calculation/Bitwise/And.md)
- [左移](node-reference/Calculation/Bitwise/LeftShift.md)
- [非](node-reference/Calculation/Bitwise/Not.md)
- [或](node-reference/Calculation/Bitwise/Or.md)
- [右移](node-reference/Calculation/Bitwise/RightShift.md)
- [异或](node-reference/Calculation/Bitwise/Xor.md)

### 比较

#### 等于

- [布尔](node-reference/Calculation/Compare/Equal/Bool.md)
- [浮点数](node-reference/Calculation/Compare/Equal/Float64.md)
- [整数](node-reference/Calculation/Compare/Equal/Int64.md)

#### 大于

- [浮点数](node-reference/Calculation/Compare/Greater/Float64.md)
- [整数](node-reference/Calculation/Compare/Greater/Int64.md)

#### 大于等于

- [浮点数](node-reference/Calculation/Compare/GreaterOrEqual/Float64.md)
- [整数](node-reference/Calculation/Compare/GreaterOrEqual/Int64.md)

#### 小于

- [浮点数](node-reference/Calculation/Compare/Less/Float64.md)
- [整数](node-reference/Calculation/Compare/Less/Int64.md)

#### 小于等于

- [浮点数](node-reference/Calculation/Compare/LessOrEqual/Float64.md)
- [整数](node-reference/Calculation/Compare/LessOrEqual/Int64.md)

#### 不等于

- [布尔](node-reference/Calculation/Compare/NotEqual/Bool.md)
- [浮点数](node-reference/Calculation/Compare/NotEqual/Float64.md)
- [整数](node-reference/Calculation/Compare/NotEqual/Int64.md)

### 逻辑运算

- [与](node-reference/Calculation/Logic/And.md)
- [非](node-reference/Calculation/Logic/Not.md)
- [或](node-reference/Calculation/Logic/Or.md)
- [异或](node-reference/Calculation/Logic/Xor.md)

### 数学

#### 绝对值

- [浮点数](node-reference/Calculation/Math/Abs/Float64.md)
- [整数](node-reference/Calculation/Math/Abs/Int64.md)

#### 加

- [浮点数](node-reference/Calculation/Math/Add/Float64.md)
- [整数](node-reference/Calculation/Math/Add/Int64.md)

#### 反余弦

- [浮点数](node-reference/Calculation/Math/Arccos/Float64.md)

#### 反正弦

- [浮点数](node-reference/Calculation/Math/Arcsin/Float64.md)

#### 反正切

- [浮点数](node-reference/Calculation/Math/Arctan/Float64.md)

#### 向上取整

- [浮点数](node-reference/Calculation/Math/Ceil/Float64.md)

#### 余弦

- [浮点数](node-reference/Calculation/Math/Cos/Float64.md)

#### 除

- [浮点数](node-reference/Calculation/Math/Divide/Float64.md)
- [整数](node-reference/Calculation/Math/Divide/Int64.md)

#### 向下取整

- [浮点数](node-reference/Calculation/Math/Floor/Float64.md)

#### 对数

- [浮点数](node-reference/Calculation/Math/Logarithm/Float64.md)

#### 取最大值

- [浮点数](node-reference/Calculation/Math/Max/Float64.md)
- [整数](node-reference/Calculation/Math/Max/Int64.md)

#### 取最小值

- [浮点数](node-reference/Calculation/Math/Min/Float64.md)
- [整数](node-reference/Calculation/Math/Min/Int64.md)

#### 取余

- [浮点数](node-reference/Calculation/Math/Modulo/Float64.md)
- [整数](node-reference/Calculation/Math/Modulo/Int64.md)

#### 乘

- [浮点数](node-reference/Calculation/Math/Multiply/Float64.md)
- [整数](node-reference/Calculation/Math/Multiply/Int64.md)

#### 指数

- [浮点数](node-reference/Calculation/Math/Pow/Float64.md)

#### 四舍五入

- [浮点数](node-reference/Calculation/Math/Round/Float64.md)

#### 符号

- [浮点数](node-reference/Calculation/Math/Signum/Float64.md)
- [整数](node-reference/Calculation/Math/Signum/Int64.md)

#### 正弦

- [浮点数](node-reference/Calculation/Math/Sin/Float64.md)

#### 减

- [浮点数](node-reference/Calculation/Math/Subtract/Float64.md)
- [整数](node-reference/Calculation/Math/Subtract/Int64.md)

#### 正切

- [浮点数](node-reference/Calculation/Math/Tan/Float64.md)

## 数据

- [随机数](node-reference/Data/Random.md)

### 颜色

- [合成](node-reference/Data/Color/Combine.md)
- [拆分](node-reference/Data/Color/Split.md)

### JSON

- [值类型](node-reference/Data/Json/ValueType.md)

#### 数组

- [清空](node-reference/Data/Json/Array/Clear.md)
- [创建](node-reference/Data/Json/Array/Create.md)
- [元素数量](node-reference/Data/Json/Array/ElementCount.md)
- [获取值](node-reference/Data/Json/Array/GetValue.md)
- [插入值](node-reference/Data/Json/Array/InsertValue.md)
- [删除元素](node-reference/Data/Json/Array/RemoveElement.md)

#### 对象

- [清空](node-reference/Data/Json/Object/Clear.md)
- [包含键](node-reference/Data/Json/Object/ContainsKey.md)
- [创建](node-reference/Data/Json/Object/Create.md)
- [元素数量](node-reference/Data/Json/Object/ElementCount.md)
- [获取值](node-reference/Data/Json/Object/GetValue.md)
- [插入值](node-reference/Data/Json/Object/InsertValue.md)
- [获取所有键](node-reference/Data/Json/Object/ObjectKeys.md)
- [删除元素](node-reference/Data/Json/Object/RemoveElement.md)

### 标量

- [整数按位转浮点数](node-reference/Data/Scalar/BitsToFloat64.md)
- [浮点数按位转整数](node-reference/Data/Scalar/Float64ToBits.md)
- [浮点数分类](node-reference/Data/Scalar/FpClassify.md)

### 字符串

- [格式化](node-reference/Data/String/Format.md)
- [包含](node-reference/Data/String/StringContains.md)
- [分割](node-reference/Data/String/StringSplit.md)
- [清理](node-reference/Data/String/StringTrim.md)

### 时间

- [Unix时间戳](node-reference/Data/Time/UnixTimestamp.md)

### 向量

#### 合成

- [二维浮点数向量](node-reference/Data/Vector/Combine/Vector2Float64.md)
- [二维整数向量](node-reference/Data/Vector/Combine/Vector2Int64.md)
- [四维浮点数向量](node-reference/Data/Vector/Combine/Vector4Float64.md)
- [四维整数向量](node-reference/Data/Vector/Combine/Vector4Int64.md)

#### 拆分

- [二维浮点数向量](node-reference/Data/Vector/Split/Vector2Float64.md)
- [二维整数向量](node-reference/Data/Vector/Split/Vector2Int64.md)
- [四维浮点数向量](node-reference/Data/Vector/Split/Vector4Float64.md)
- [四维整数向量](node-reference/Data/Vector/Split/Vector4Int64.md)

## 控制流

- [分支](node-reference/Flow/Branch.md)
- [程序结束](node-reference/Flow/ProgramEnd.md)
- [等待](node-reference/Flow/Wait.md)
- [等待至](node-reference/Flow/WaitUntil.md)

### 循环

- [计次循环](node-reference/Flow/Loop/ForLoop.md)
- [循环](node-reference/Flow/Loop/Loop.md)
- [退出循环](node-reference/Flow/Loop/LoopBreak.md)
- [进入新一轮循环](node-reference/Flow/Loop/LoopContinue.md)

## 图像

- [创建图像](node-reference/Image/CreateImage.md)
- [创建视频流（摄像头）](node-reference/Image/CreateVideoStreamFromCamera.md)
- [创建视频流（文件）](node-reference/Image/CreateVideoStreamFromFile.md)
- [创建视频流（显示器）](node-reference/Image/CreateVideoStreamFromMonitor.md)
- [创建视频流（窗口）](node-reference/Image/CreateVideoStreamFromWindow.md)
- [裁剪图片](node-reference/Image/CropImage.md)
- [绘制矩形](node-reference/Image/DrawRectangle.md)
- [绘制文本](node-reference/Image/DrawText.md)
- [取像素](node-reference/Image/GetPixels.md)
- [灰化图片](node-reference/Image/GrayscaleImage.md)
- [图像平均值](node-reference/Image/ImageMean.md)
- [加载图片](node-reference/Image/LoadImage.md)
- [从视频流读取帧](node-reference/Image/ReadFrameFromVideoStream.md)
- [旋转图片](node-reference/Image/RotateImage.md)
- [保存图像](node-reference/Image/SaveImage.md)
- [缩放图片](node-reference/Image/ScaleImage.md)
- [显示图片](node-reference/Image/ShowImage.md)
- [模板匹配](node-reference/Image/TemplateMatch.md)

## 输入模拟

### 键盘

- [按键轻击](node-reference/InputSimulation/Keyboard/KeyClick.md)
- [按键按下](node-reference/InputSimulation/Keyboard/KeyPress.md)
- [按键抬起](node-reference/InputSimulation/Keyboard/KeyRelease.md)
- [按键状态](node-reference/InputSimulation/Keyboard/KeyState.md)
- [文本](node-reference/InputSimulation/Keyboard/Text.md)

### 鼠标

- [按钮轻击](node-reference/InputSimulation/Mouse/ButtonClick.md)
- [按钮按下](node-reference/InputSimulation/Mouse/ButtonPress.md)
- [按钮抬起](node-reference/InputSimulation/Mouse/ButtonRelease.md)
- [按钮状态](node-reference/InputSimulation/Mouse/ButtonState.md)
- [移动](node-reference/InputSimulation/Mouse/Move.md)
- [位置](node-reference/InputSimulation/Mouse/Position.md)
- [滚动](node-reference/InputSimulation/Mouse/Scroll.md)

## 系统

- [日志](node-reference/System/Log.md)

### 文件

- [读取文本](node-reference/System/File/ReadToString.md)
- [写入文本](node-reference/System/File/WriteString.md)

### 进程

- [创建](node-reference/System/Process/Spawn.md)

## 变量

### 获取值

- [布尔](node-reference/Variable/Getter/Bool.md)
- [浮点数](node-reference/Variable/Getter/Float64.md)
- [整数](node-reference/Variable/Getter/Int64.md)
- [JSON数组](node-reference/Variable/Getter/JsonArray.md)
- [JSON对象](node-reference/Variable/Getter/JsonObject.md)
- [JSON值](node-reference/Variable/Getter/JsonValue.md)
- [字符串](node-reference/Variable/Getter/String.md)
- [二维浮点数向量](node-reference/Variable/Getter/Vector2Float64.md)
- [二维整数向量](node-reference/Variable/Getter/Vector2Int64.md)
- [四维浮点数向量](node-reference/Variable/Getter/Vector4Float64.md)
- [四维整数向量](node-reference/Variable/Getter/Vector4Int64.md)

#### 原生对象

- [图像](node-reference/Variable/Getter/NativeObject/Image.md)
- [文本识别引擎](node-reference/Variable/Getter/NativeObject/OCREngine.md)
- [ONNX](node-reference/Variable/Getter/NativeObject/ONNX.md)
- [视频流](node-reference/Variable/Getter/NativeObject/VideoStream.md)

### 设置值

- [布尔](node-reference/Variable/Setter/Bool.md)
- [浮点数](node-reference/Variable/Setter/Float64.md)
- [整数](node-reference/Variable/Setter/Int64.md)
- [JSON数组](node-reference/Variable/Setter/JsonArray.md)
- [JSON对象](node-reference/Variable/Setter/JsonObject.md)
- [JSON值](node-reference/Variable/Setter/JsonValue.md)
- [字符串](node-reference/Variable/Setter/String.md)
- [二维浮点数向量](node-reference/Variable/Setter/Vector2Float64.md)
- [二维整数向量](node-reference/Variable/Setter/Vector2Int64.md)
- [四维浮点数向量](node-reference/Variable/Setter/Vector4Float64.md)
- [四维整数向量](node-reference/Variable/Setter/Vector4Int64.md)

#### 原生对象

- [图像](node-reference/Variable/Setter/NativeObject/Image.md)
- [文本识别引擎](node-reference/Variable/Setter/NativeObject/OCREngine.md)
- [ONNX](node-reference/Variable/Setter/NativeObject/ONNX.md)
- [视频流](node-reference/Variable/Setter/NativeObject/VideoStream.md)

## 调用程序

- [CallProgram](node-reference/CallProgram.md)

## 选项

- [输入](node-reference/Option/Input.md)
- [输出](node-reference/Option/Output.md)
