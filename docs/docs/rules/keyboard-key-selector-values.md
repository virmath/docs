# 键盘按键选择器可选值

键盘按键选择器（KeyboardKeySelector）支持的值是按键的英文名称，可直接用于 `elf program option set` / `elf program node connector set` 的值参数，也可在编辑器中通过按键监听自动获取。按键名区分大小写；整数值为按键对应的内部编码。

## 字母键

| 按键名 | 整数值 |
| --- | --- |
| `A` | 30 |
| `B` | 31 |
| `C` | 32 |
| `D` | 33 |
| `E` | 34 |
| `F` | 35 |
| `G` | 36 |
| `H` | 37 |
| `I` | 38 |
| `J` | 39 |
| `K` | 40 |
| `L` | 41 |
| `M` | 42 |
| `N` | 43 |
| `O` | 44 |
| `P` | 45 |
| `Q` | 46 |
| `R` | 47 |
| `S` | 48 |
| `T` | 49 |
| `U` | 50 |
| `V` | 51 |
| `W` | 52 |
| `X` | 53 |
| `Y` | 54 |
| `Z` | 55 |

## 数字键

| 按键名 | 整数值 |
| --- | --- |
| `0` | 15 |
| `1` | 16 |
| `2` | 17 |
| `3` | 18 |
| `4` | 19 |
| `5` | 20 |
| `6` | 21 |
| `7` | 22 |
| `8` | 23 |
| `9` | 24 |

## 功能键

| 按键名 | 整数值 |
| --- | --- |
| `F1` | 2 |
| `F2` | 3 |
| `F3` | 4 |
| `F4` | 5 |
| `F5` | 6 |
| `F6` | 7 |
| `F7` | 8 |
| `F8` | 9 |
| `F9` | 10 |
| `F10` | 11 |
| `F11` | 12 |
| `F12` | 13 |

## 编辑键

| 按键名 | 整数值 |
| --- | --- |
| `Escape` | 1 |
| `Tab` | 28 |
| `CapsLock` | 29 |
| `Backspace` | 27 |
| `Enter` | 61 |
| `Space` | 65 |
| `Insert` | 71 |
| `Delete` | 72 |
| `Home` | 73 |
| `End` | 74 |
| `PageUp` | 75 |
| `PageDown` | 76 |
| `PrintScreen` | 66 |
| `ScrollLock` | 67 |
| `Pause` | 68 |
| `Cancel` | 69 |
| `Help` | 70 |

## 符号键

| 按键名 | 整数值 | 符号 |
| --- | --- | --- |
| `BackQuote` | 14 | ` |
| `Minus` | 25 | - |
| `Equals` | 26 | = |
| `OpenBracket` | 56 | [ |
| `CloseBracket` | 57 | ] |
| `Backslash` | 58 | \ |
| `Semicolon` | 59 | ; |
| `Quote` | 60 | ' |
| `Comma` | 62 | , |
| `Period` | 63 | . |
| `Slash` | 64 | / |

## 方向键

| 按键名 | 整数值 |
| --- | --- |
| `Up` | 77 |
| `Down` | 80 |
| `Left` | 78 |
| `Right` | 79 |

## 小键盘

| 按键名 | 整数值 |
| --- | --- |
| `NumLock` | 81 |
| `NumPadClear` | 82 |
| `NumPadDivide` | 83 |
| `NumPadMultiply` | 84 |
| `NumPadSubtract` | 85 |
| `NumPadEquals` | 86 |
| `NumPadAdd` | 87 |
| `NumPadEnter` | 88 |
| `NumPadDecimal` | 89 |
| `NumPadSeparator` | 90 |
| `NumPad0` | 91 |
| `NumPad1` | 92 |
| `NumPad2` | 93 |
| `NumPad3` | 94 |
| `NumPad4` | 95 |
| `NumPad5` | 96 |
| `NumPad6` | 97 |
| `NumPad7` | 98 |
| `NumPad8` | 99 |
| `NumPad9` | 100 |

## 修饰键

| 按键名 | 整数值 |
| --- | --- |
| `LeftShift` | 101 |
| `RightShift` | 102 |
| `LeftControl` | 103 |
| `RightControl` | 104 |
| `LeftAlt` | 105 |
| `RightAlt` | 106 |
| `LeftMeta` | 107 |
| `RightMeta` | 108 |

`Undefined`（整数值 0）为未定义状态（默认值），一般无需手动设置。
