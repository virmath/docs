# 快速入门

## 基本概念

### 程序

程序（亦可称为"脚本"）是用户编写的运行逻辑。

新建程序只需点击程序列表面板的"+"按钮，打开新建程序对话框，填写程序名称与描述后点击"确认"即可完成：

![](quick-start/PixPin_2026-07-01_10-30-45.webp)

![](quick-start/PixPin_2026-07-01_10-39-37.webp)

以上即为创建的第一个程序。按快捷键<kbd>F5</kbd>或点击![](quick-start/PixPin_2026-07-01_10-43-17.webp)按钮即可运行该程序。

程序由节点构成，每个节点包含"输入端"（亦称"输入连接器"）和"输出端"（亦称"输出连接器"）。节点之间通过连接输入端与输出端来确定数据传输方向及执行顺序：

![](quick-start/PixPin_2026-07-01_10-59-07.webp)

### 选项

选项是程序的输入或输出参数。

点击选项面板中的"+"按钮，打开新建选项对话框，配置用途、类型和名称，最后点击"确认"按钮即可完成创建：

![](quick-start/PixPin_2026-07-01_11-13-41.webp)

可以将选项直接拖入画布中使用：

![](quick-start/PixPin_2026-07-01_11-19-06.webp)

### 执行器

执行器可为程序配置不同的选项值，以处理不同的任务。多个执行器可并行运行（需订阅增强版）。

新建执行器的操作如下图所示：

![](quick-start/PixPin_2026-07-01_11-24-38.webp)

![](quick-start/PixPin_2026-07-01_11-25-01.webp)

<div style="display: flex; justify-content: space-between;">
  <img src="./quick-start/PixPin_2026-07-01_11-29-38.webp" alt="图片1" style="width: 49%;" />
  <img src="./quick-start/PixPin_2026-07-01_11-29-44.webp" alt="图片2" style="width: 49%;" />
</div>

## 数据类型

### 基础

1. `整数`：64位有符号整数，可表示的整数范围为：$[-2^{63},\,2^{63}-1]$。
2. `浮点数`：双精度浮点数。
3. `布尔`：包含两个可能的值，即**真**(True)或**假**(False)，专门用于执行逻辑判断和控制程序的运行流程。
4. `字符串`：用于表示文本的数据类型。

### 复合

1. `二维整数向量`
2. `二维浮点数向量`
3. `四维整数向量`
4. `四维浮点数向量`

### JSON

1. `JSON值`：可以表示除原生类型外的其它所有类型，具体类型运行时可通过`数据/JSON/值类型`节点判断。
2. `JSON对象`：无序的键值对集合，其中键是`字符串`类型。
3. `JSON数组`：有序的`JSON值`集合。

### 原生

1. `图像`
2. `ONNX`
3. `文本识别引擎`
4. `视频流`

## 选项类型

选项是程序的输入/输出，每种数据类型都有对应的选项类型；此外，针对具体使用场景，我们额外增加了一些选项类型，它们是：

基于`整数`的：

1. 键盘按键选择器
2. 鼠标按钮选择器
3. 窗口句柄选择器
4. 显示器句柄选择器
5. 颜色拾取器
6. 日期时间选择器

基于`字符串`的：

1. 路径选择器
2. 图像路径选择器

## 节点执行顺序

::: info
复制图片下方的 JSON 代码至程序画布，即可快速测试节点效果。
:::

1. 每个程序只有一个`控制流/程序结束`节点，可通过画布右上角的![Location](quick-start/location.webp)按钮快速定位。
2. 除`控制流/分支`节点和`控制流/循环`类节点外，其余节点均按从左到右、从上到下的顺序依次执行。
  ![](quick-start/1.webp)
  ::: details JSON
  ```json:line-numbers
  {
    "format": "VirmathElf.CopiedNodes",
    "version": 8,
    "nodes": [
      {
        "$type": "End",
        "id": "019f2660-2610-7562-ba28-226bfaf74f6f",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": 945,
          "y": 705
        },
        "size": {
          "width": 90.66666666666667,
          "height": 58.666666666666664
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-7770-90f6-8b7b0be86a67",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-7562-ba28-226bfaf74f6f",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2660-2610-76f6-a03e-3fc24b3b82f7"
            ],
            "anchor": {
              "x": 962,
              "y": 747.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": []
      },
      {
        "$type": "Log",
        "id": "019f2660-2610-7a01-91c6-90aa0e8596b0",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": 0,
          "y": 600
        },
        "size": {
          "width": 254,
          "height": 94.66666666666667
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-7f90-a1e3-4e95325b8aa8",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-7a01-91c6-90aa0e8596b0",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "String",
            "value": "1",
            "id": "019f2660-2610-7033-b76f-a8a1eed26fd4",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-7a01-91c6-90aa0e8596b0",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-74f0-8968-cab84675c0f1",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-7a01-91c6-90aa0e8596b0",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2660-2610-71fb-ae74-1d0129cc3b5d"
            ],
            "anchor": {
              "x": 236.33333333333334,
              "y": 642.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      },
      {
        "$type": "Branch",
        "id": "019f2660-2610-774c-9599-573007bd63ac",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": 645,
          "y": 705
        },
        "size": {
          "width": 210,
          "height": 193.33333333333334
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-73e2-ad9d-1b28f0e39972",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-774c-9599-573007bd63ac",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2660-2610-759e-9b54-9623fa5628f6"
            ],
            "anchor": {
              "x": 662,
              "y": 747.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "Bool",
            "value": true,
            "id": "019f2660-2610-73ec-b144-af9df7d38234",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-774c-9599-573007bd63ac",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-7395-9dc1-94da2a0b7e55",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-774c-9599-573007bd63ac",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2660-2610-7e61-b5a3-c660951a2b77"
            ],
            "anchor": {
              "x": 662,
              "y": 805.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-7a2d-8fce-4e20f3f53acf",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-774c-9599-573007bd63ac",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-7cdb-a217-4ec2977499b6",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-774c-9599-573007bd63ac",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2660-2610-76f6-a03e-3fc24b3b82f7"
            ],
            "anchor": {
              "x": 837.3333333333334,
              "y": 747.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      },
      {
        "$type": "Log",
        "id": "019f2660-2610-705f-9711-5f9189616cb5",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": 300,
          "y": 600
        },
        "size": {
          "width": 254,
          "height": 94.66666666666667
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-73c0-9182-93ec13ef6625",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-705f-9711-5f9189616cb5",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2660-2610-71fb-ae74-1d0129cc3b5d"
            ],
            "anchor": {
              "x": 317,
              "y": 642.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "String",
            "value": "2",
            "id": "019f2660-2610-751e-8aef-c8eef926fb07",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-705f-9711-5f9189616cb5",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-781a-b59b-b27785c9b617",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-705f-9711-5f9189616cb5",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2660-2610-759e-9b54-9623fa5628f6"
            ],
            "anchor": {
              "x": 536.3333333333334,
              "y": 642.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      },
      {
        "$type": "Log",
        "id": "019f2660-2610-7327-a863-ec1cb423fb39",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": 300,
          "y": 765
        },
        "size": {
          "width": 254,
          "height": 94.66666666666667
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-7ccf-adff-aa128ae4ad21",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-7327-a863-ec1cb423fb39",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "String",
            "value": "3",
            "id": "019f2660-2610-7332-965f-80500316eb96",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-7327-a863-ec1cb423fb39",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2660-2610-748d-8cd7-7254a6836775",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2660-2610-7327-a863-ec1cb423fb39",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2660-2610-7e61-b5a3-c660951a2b77"
            ],
            "anchor": {
              "x": 536.3333333333334,
              "y": 807.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      }
    ],
    "connections": [
      {
        "id": "019f2660-2610-76f6-a03e-3fc24b3b82f7",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2660-2610-774c-9599-573007bd63ac",
        "targetNodeId": "019f2660-2610-7562-ba28-226bfaf74f6f",
        "sourceId": "019f2660-2610-7cdb-a217-4ec2977499b6",
        "targetId": "019f2660-2610-7770-90f6-8b7b0be86a67"
      },
      {
        "id": "019f2660-2610-759e-9b54-9623fa5628f6",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2660-2610-705f-9711-5f9189616cb5",
        "targetNodeId": "019f2660-2610-774c-9599-573007bd63ac",
        "sourceId": "019f2660-2610-781a-b59b-b27785c9b617",
        "targetId": "019f2660-2610-73e2-ad9d-1b28f0e39972"
      },
      {
        "id": "019f2660-2610-7e61-b5a3-c660951a2b77",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2660-2610-7327-a863-ec1cb423fb39",
        "targetNodeId": "019f2660-2610-774c-9599-573007bd63ac",
        "sourceId": "019f2660-2610-748d-8cd7-7254a6836775",
        "targetId": "019f2660-2610-7395-9dc1-94da2a0b7e55"
      },
      {
        "id": "019f2660-2610-71fb-ae74-1d0129cc3b5d",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2660-2610-7a01-91c6-90aa0e8596b0",
        "targetNodeId": "019f2660-2610-705f-9711-5f9189616cb5",
        "sourceId": "019f2660-2610-74f0-8968-cab84675c0f1",
        "targetId": "019f2660-2610-73c0-9182-93ec13ef6625"
      }
    ]
  }
  ```
  :::
3. 除连接至`循环体`的节点外，其他节点仅执行一次（即使同一输出端连接至多个不同节点）。
   ![](quick-start/2.webp)
  ::: details JSON
  ```json:line-numbers
  {
    "format": "VirmathElf.CopiedNodes",
    "version": 8,
    "nodes": [
      {
        "$type": "End",
        "id": "019f2665-ed56-7a39-b1de-fbac91b8427c",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": 840,
          "y": 630
        },
        "size": {
          "width": 90.66666666666667,
          "height": 58.666666666666664
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-7828-a25e-4bfde4c48974",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7a39-b1de-fbac91b8427c",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2665-ed56-7783-b28e-c8a289bd4fab"
            ],
            "anchor": {
              "x": 857,
              "y": 672.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": []
      },
      {
        "$type": "Log",
        "id": "019f2665-ed56-76d2-8ea9-3e01fd8d4ea9",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": -60,
          "y": 450
        },
        "size": {
          "width": 254,
          "height": 94.66666666666667
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-7372-8fbe-03d3cc743760",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-76d2-8ea9-3e01fd8d4ea9",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "String",
            "value": "1",
            "id": "019f2665-ed56-7a18-b68f-51f858466375",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-76d2-8ea9-3e01fd8d4ea9",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-72db-a8fb-51091a29f6a0",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-76d2-8ea9-3e01fd8d4ea9",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2665-ed56-7fe4-9f9e-577adfd1e7e2",
              "019f2665-ed56-7a7c-b189-825c61e09293"
            ],
            "anchor": {
              "x": 176.33333333333334,
              "y": 492.3333333333333
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      },
      {
        "$type": "Log",
        "id": "019f2665-ed56-7474-8e71-338269c71740",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": 285,
          "y": 450
        },
        "size": {
          "width": 254,
          "height": 94.66666666666667
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-72ed-ae3c-40a7d65764dd",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7474-8e71-338269c71740",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2665-ed56-7fe4-9f9e-577adfd1e7e2"
            ],
            "anchor": {
              "x": 302,
              "y": 492.3333333333333
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "String",
            "value": "2",
            "id": "019f2665-ed56-7d0f-a9ee-47b5bc570a2f",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7474-8e71-338269c71740",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-78a3-93ef-a190f666998a",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7474-8e71-338269c71740",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2665-ed56-71a0-8d4c-73c0659f1c94"
            ],
            "anchor": {
              "x": 521.3333333333334,
              "y": 492.3333333333333
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      },
      {
        "$type": "Log",
        "id": "019f2665-ed56-740d-8e1f-a3c3b84d8daf",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": 675,
          "y": 465
        },
        "size": {
          "width": 254,
          "height": 94.66666666666667
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-7e6b-854c-11da6ac7d97f",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-740d-8e1f-a3c3b84d8daf",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2665-ed56-783b-bfde-3b17e4266562"
            ],
            "anchor": {
              "x": 692,
              "y": 507.3333333333333
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "String",
            "value": "3",
            "id": "019f2665-ed56-7a94-af70-3852bf03e094",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-740d-8e1f-a3c3b84d8daf",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-7289-8389-d46a57d7f4d1",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-740d-8e1f-a3c3b84d8daf",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2665-ed56-7783-b28e-c8a289bd4fab"
            ],
            "anchor": {
              "x": 911.3333333333334,
              "y": 507.3333333333333
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      },
      {
        "$type": "ForLoop",
        "id": "019f2665-ed56-726b-a113-6c78248351ae",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": 300,
          "y": 615
        },
        "size": {
          "width": 310,
          "height": 231.33333333333334
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-7363-8892-a90eda3798cf",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-726b-a113-6c78248351ae",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2665-ed56-71a0-8d4c-73c0659f1c94"
            ],
            "anchor": {
              "x": 317,
              "y": 657.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "Int64",
            "value": 0,
            "id": "019f2665-ed56-7651-836a-80487a72dfd8",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-726b-a113-6c78248351ae",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "Int64",
            "value": 3,
            "id": "019f2665-ed56-7b30-bb69-66838470f2f9",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-726b-a113-6c78248351ae",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "String",
            "value": "index",
            "id": "019f2665-ed56-740b-8604-7077c9816bef",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-726b-a113-6c78248351ae",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "Int64",
            "value": 0,
            "id": "019f2665-ed56-7d37-8395-2ae84b5855b2",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-726b-a113-6c78248351ae",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-7a1c-b388-d32e84462606",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-726b-a113-6c78248351ae",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2665-ed56-7615-8f2a-540198fc3dfa"
            ],
            "anchor": {
              "x": 317,
              "y": 830
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-763b-8501-574a80851399",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-726b-a113-6c78248351ae",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2665-ed56-783b-bfde-3b17e4266562"
            ],
            "anchor": {
              "x": 592.3333333333334,
              "y": 657.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      },
      {
        "$type": "GetVariable",
        "id": "019f2665-ed56-7635-90f6-8743ef4a97e4",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": -120,
          "y": 795
        },
        "size": {
          "width": 290.6666666666667,
          "height": 66.66666666666667
        },
        "inputs": [
          {
            "$type": "String",
            "value": "index",
            "id": "019f2665-ed56-777b-8b2f-4fe4ad814326",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7635-90f6-8743ef4a97e4",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Int64",
            "value": 0,
            "id": "019f2665-ed56-7d43-b771-30f5a9e6854c",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7635-90f6-8743ef4a97e4",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2665-ed56-756d-9b59-106586e10ca0"
            ],
            "anchor": {
              "x": 153,
              "y": 837.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      },
      {
        "$type": "Log",
        "id": "019f2665-ed56-7a6c-a4a8-75ec144ee672",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "location": {
          "x": -30,
          "y": 615
        },
        "size": {
          "width": 256.6666666666667,
          "height": 121.33333333333333
        },
        "inputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-7120-b44e-1576697aa44c",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7a6c-a4a8-75ec144ee672",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2665-ed56-7a7c-b189-825c61e09293"
            ],
            "anchor": {
              "x": -13,
              "y": 657.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "String",
            "value": "index: {}",
            "id": "019f2665-ed56-7dfe-bc4f-d443a28c5eaa",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7a6c-a4a8-75ec144ee672",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [],
            "anchor": {
              "x": 0,
              "y": 0
            },
            "isConnected": false,
            "layoutOrientation": 0,
            "valueEditor": null
          },
          {
            "$type": "String",
            "value": "",
            "id": "019f2665-ed56-780f-87e2-522d5e23d881",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7a6c-a4a8-75ec144ee672",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 1,
            "connections": [
              "019f2665-ed56-756d-9b59-106586e10ca0"
            ],
            "anchor": {
              "x": -13,
              "y": 721.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ],
        "outputs": [
          {
            "$type": "Order",
            "value": null,
            "id": "019f2665-ed56-7067-b25a-446a8d019d01",
            "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
            "nodeId": "019f2665-ed56-7a6c-a4a8-75ec144ee672",
            "optionId": "00000000-0000-0000-0000-000000000000",
            "optionIndex": 0,
            "usageType": 2,
            "connections": [
              "019f2665-ed56-7615-8f2a-540198fc3dfa"
            ],
            "anchor": {
              "x": 209,
              "y": 657.3333333333334
            },
            "isConnected": true,
            "layoutOrientation": 0,
            "valueEditor": null
          }
        ]
      }
    ],
    "connections": [
      {
        "id": "019f2665-ed56-7783-b28e-c8a289bd4fab",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2665-ed56-740d-8e1f-a3c3b84d8daf",
        "targetNodeId": "019f2665-ed56-7a39-b1de-fbac91b8427c",
        "sourceId": "019f2665-ed56-7289-8389-d46a57d7f4d1",
        "targetId": "019f2665-ed56-7828-a25e-4bfde4c48974"
      },
      {
        "id": "019f2665-ed56-7fe4-9f9e-577adfd1e7e2",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2665-ed56-76d2-8ea9-3e01fd8d4ea9",
        "targetNodeId": "019f2665-ed56-7474-8e71-338269c71740",
        "sourceId": "019f2665-ed56-72db-a8fb-51091a29f6a0",
        "targetId": "019f2665-ed56-72ed-ae3c-40a7d65764dd"
      },
      {
        "id": "019f2665-ed56-783b-bfde-3b17e4266562",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2665-ed56-726b-a113-6c78248351ae",
        "targetNodeId": "019f2665-ed56-740d-8e1f-a3c3b84d8daf",
        "sourceId": "019f2665-ed56-763b-8501-574a80851399",
        "targetId": "019f2665-ed56-7e6b-854c-11da6ac7d97f"
      },
      {
        "id": "019f2665-ed56-71a0-8d4c-73c0659f1c94",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2665-ed56-7474-8e71-338269c71740",
        "targetNodeId": "019f2665-ed56-726b-a113-6c78248351ae",
        "sourceId": "019f2665-ed56-78a3-93ef-a190f666998a",
        "targetId": "019f2665-ed56-7363-8892-a90eda3798cf"
      },
      {
        "id": "019f2665-ed56-7615-8f2a-540198fc3dfa",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2665-ed56-7a6c-a4a8-75ec144ee672",
        "targetNodeId": "019f2665-ed56-726b-a113-6c78248351ae",
        "sourceId": "019f2665-ed56-7067-b25a-446a8d019d01",
        "targetId": "019f2665-ed56-7a1c-b388-d32e84462606"
      },
      {
        "id": "019f2665-ed56-7a7c-b189-825c61e09293",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2665-ed56-76d2-8ea9-3e01fd8d4ea9",
        "targetNodeId": "019f2665-ed56-7a6c-a4a8-75ec144ee672",
        "sourceId": "019f2665-ed56-72db-a8fb-51091a29f6a0",
        "targetId": "019f2665-ed56-7120-b44e-1576697aa44c"
      },
      {
        "id": "019f2665-ed56-756d-9b59-106586e10ca0",
        "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
        "sourceNodeId": "019f2665-ed56-7635-90f6-8743ef4a97e4",
        "targetNodeId": "019f2665-ed56-7a6c-a4a8-75ec144ee672",
        "sourceId": "019f2665-ed56-7d43-b771-30f5a9e6854c",
        "targetId": "019f2665-ed56-780f-87e2-522d5e23d881"
      }
    ]
  }
  ```
  :::

## 快捷键

| 操作      | 作用 |
| :----------- | :----------- |
|<kbd>F5</kbd>|启动程序|
|<kbd>F6</kbd>|停止程序|
|<kbd>Ctrl</kbd> + <kbd>C</kbd>|复制选中节点|
|<kbd>Ctrl</kbd> + <kbd>V</kbd>|粘贴节点|
|<kbd>Del</kbd>|删除节点|
|<kbd>Ctrl</kbd> + <kbd>Z</kbd>|撤销|
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd>|重做|
|<kbd>Ctrl</kbd> + <kbd>G</kbd>|基于当前选中节点创建节点组|
|<kbd>Shift</kbd> + 🖱️左键拖动节点组标题栏|单独移动节点组|
|<kbd>Alt</kbd> + 🖱️左键点击节点输入端（或输出端）|断开输入端（或输出端）连线|
