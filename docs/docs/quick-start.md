# 快速入门

::: info
复制图片下方的 JSON 代码至程序画布，即可快速测试节点效果。
:::

## 数据类型

### 基础

1. 整数
2. 浮点数
3. 布尔
4. 字符串（文本）

### 复合

1. 二维整数/浮点数向量
2. 四维整数/浮点数向量

### 集合

1. JSON对象（字典）
2. JSON数组（数组）

### 原生

1. 图像
2. ONNX
3. 文本识别引擎
4. 视频流

## 选项类型

1. 键盘按键选择器
2. 鼠标按钮选择器
3. 窗口句柄选择器
4. 显示器句柄选择器
5. 路径选择器
6. 图像路径选择器
7. 颜色拾取器
8. 日期时间选择器

## 节点执行顺序

每个程序只有一个`控制流/程序结束`节点，可通过画布右上角的![Location](quick-start/location.webp)按钮快速定位。除`控制流/分支`节点和`控制流/循环`类节点外，其余节点均按从左到右、从上到下的顺序依次执行。

![](quick-start/1.webp)

::: details JSON
```json:line-numbers
{
  "version": 8,
  "nodes": [
    {
      "$type": "Log",
      "id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -465,
        "Y": 0
      },
      "size": {
        "Width": 254,
        "Height": 94.66666666666667
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08aa-87a9-70eb-80b0-9718269f7bb4",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 422,
            "Y": -17.666666666666664
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "String",
          "value": "1",
          "id": "019f08aa-87a9-7f69-8f7c-8a359cc70dc9",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08aa-87a9-7683-94dd-4d0449c37a7f",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f0ecc-ebbd-72c0-ae39-44a03b583aff"
          ],
          "anchor": {
            "X": -228.66666666666666,
            "Y": 42.333333333333336
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ]
    },
    {
      "$type": "Branch",
      "id": "019f0ecc-aba5-7136-b386-8826eadb10ff",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 180,
        "Y": 105
      },
      "size": {
        "Width": 210,
        "Height": 193.33333333333334
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0ecc-aba5-7792-a7e7-9173a742997c",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecc-aba5-7136-b386-8826eadb10ff",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f0ecc-fa4e-718e-8772-159779168962"
          ],
          "anchor": {
            "X": 197,
            "Y": 147.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "Bool",
          "value": true,
          "id": "019f0ecc-aba6-7053-84fc-d6a6042265b1",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecc-aba5-7136-b386-8826eadb10ff",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "Order",
          "value": null,
          "id": "019f0ecc-aba6-7180-8c7e-9f563cdb86e5",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecc-aba5-7136-b386-8826eadb10ff",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f0ecd-16b4-7b9d-8d2d-b56ed869580c"
          ],
          "anchor": {
            "X": 197,
            "Y": 205.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "Order",
          "value": null,
          "id": "019f0ecc-aba6-7c0b-8b86-42735eac72bf",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecc-aba5-7136-b386-8826eadb10ff",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0ecc-aba6-7be0-930a-ec204740579e",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecc-aba5-7136-b386-8826eadb10ff",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f0ecc-c454-73fc-8156-0727e073218b"
          ],
          "anchor": {
            "X": 372.33333333333337,
            "Y": 147.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ]
    },
    {
      "$type": "Log",
      "id": "019f0ecc-de86-7115-9585-1de84a9748d3",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -165,
        "Y": 0
      },
      "size": {
        "Width": 254,
        "Height": 94.66666666666667
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0ecc-de86-78f2-8b6c-52d6a0600e38",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecc-de86-7115-9585-1de84a9748d3",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f0ecc-ebbd-72c0-ae39-44a03b583aff"
          ],
          "anchor": {
            "X": -148,
            "Y": 42.333333333333336
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "String",
          "value": "2",
          "id": "019f0ecc-de86-777a-b546-f90ba508944e",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecc-de86-7115-9585-1de84a9748d3",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0ecc-de86-7fda-b879-0319fd096cd9",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecc-de86-7115-9585-1de84a9748d3",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f0ecc-fa4e-718e-8772-159779168962"
          ],
          "anchor": {
            "X": 71.33333333333334,
            "Y": 42.333333333333336
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ]
    },
    {
      "$type": "Log",
      "id": "019f0ecd-0fdd-762c-ae8d-74fd723b96c6",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -165,
        "Y": 165
      },
      "size": {
        "Width": 254,
        "Height": 94.66666666666667
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0ecd-0fdd-74da-be9b-fe72266bd12a",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecd-0fdd-762c-ae8d-74fd723b96c6",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "String",
          "value": "3",
          "id": "019f0ecd-0fdd-7715-a299-d98acbf34983",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecd-0fdd-762c-ae8d-74fd723b96c6",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0ecd-0fdd-7a8c-b734-e30e105f5de1",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0ecd-0fdd-762c-ae8d-74fd723b96c6",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f0ecd-16b4-7b9d-8d2d-b56ed869580c"
          ],
          "anchor": {
            "X": 71.33333333333334,
            "Y": 207.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ]
    }
  ],
  "connections": [
    {
      "id": "019f0ecc-fa4e-718e-8772-159779168962",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f0ecc-de86-7115-9585-1de84a9748d3",
      "target_node_id": "019f0ecc-aba5-7136-b386-8826eadb10ff",
      "source_id": "019f0ecc-de86-7fda-b879-0319fd096cd9",
      "target_id": "019f0ecc-aba5-7792-a7e7-9173a742997c"
    },
    {
      "id": "019f0ecd-16b4-7b9d-8d2d-b56ed869580c",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f0ecd-0fdd-762c-ae8d-74fd723b96c6",
      "target_node_id": "019f0ecc-aba5-7136-b386-8826eadb10ff",
      "source_id": "019f0ecd-0fdd-7a8c-b734-e30e105f5de1",
      "target_id": "019f0ecc-aba6-7180-8c7e-9f563cdb86e5"
    },
    {
      "id": "019f0ecc-ebbd-72c0-ae39-44a03b583aff",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
      "target_node_id": "019f0ecc-de86-7115-9585-1de84a9748d3",
      "source_id": "019f08aa-87a9-7683-94dd-4d0449c37a7f",
      "target_id": "019f0ecc-de86-78f2-8b6c-52d6a0600e38"
    }
  ]
}
```
:::

除连接至`循环体`的节点外，其他节点仅执行一次（即使同一输出端连接至多个不同节点）。

![](quick-start/2.webp)

::: details JSON
```json:line-numbers
{
  "version": 8,
  "nodes": [
    {
      "$type": "End",
      "id": "019f0886-6946-77c3-be17-18402e7edab1",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 570,
        "Y": 105
      },
      "size": {
        "Width": 90.66666666666667,
        "Height": 58.666666666666664
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0886-6946-7500-9074-12951da1b34b",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0886-6946-77c3-be17-18402e7edab1",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f08b2-156d-79a6-937f-09f7232f8175"
          ],
          "anchor": {
            "X": 587,
            "Y": 147.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": []
    },
    {
      "$type": "Log",
      "id": "019f0886-6948-7422-8080-5e5425838ec5",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -345,
        "Y": -75
      },
      "size": {
        "Width": 254,
        "Height": 94.66666666666667
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0886-6948-7d3a-8e82-5d4b9359ba39",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0886-6948-7422-8080-5e5425838ec5",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "String",
          "value": "1",
          "id": "019f0886-6948-7bce-b37f-f263674cbec8",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0886-6948-7422-8080-5e5425838ec5",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0886-6948-7549-aba6-7c6a62af1a2c",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f0886-6948-7422-8080-5e5425838ec5",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f08a9-701b-79b9-9d57-92039f6b01c8",
            "019f08b6-c978-77f0-97c1-f7c8b3e8d712"
          ],
          "anchor": {
            "X": -108.66666666666666,
            "Y": -32.666666666666664
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ]
    },
    {
      "$type": "Log",
      "id": "019f08a9-6229-7745-a8c2-e0ae332c3ef5",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 15,
        "Y": -75
      },
      "size": {
        "Width": 254,
        "Height": 94.66666666666667
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08a9-6229-7d84-aee1-18f4c9b472e1",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08a9-6229-7745-a8c2-e0ae332c3ef5",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f08a9-701b-79b9-9d57-92039f6b01c8"
          ],
          "anchor": {
            "X": 32,
            "Y": -32.666666666666664
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "String",
          "value": "2",
          "id": "019f08a9-6229-782e-a9ce-52cd61b0ad59",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08a9-6229-7745-a8c2-e0ae332c3ef5",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08a9-6229-7164-96d3-e2b87b47abaf",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08a9-6229-7745-a8c2-e0ae332c3ef5",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f08b1-e96c-7147-ae0b-258b6f18cb18"
          ],
          "anchor": {
            "X": 251.33333333333334,
            "Y": -32.666666666666664
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ]
    },
    {
      "$type": "Log",
      "id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 405,
        "Y": -60
      },
      "size": {
        "Width": 254,
        "Height": 94.66666666666667
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08aa-87a9-70eb-80b0-9718269f7bb4",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f08b2-11ac-7b96-8f92-d8f661bf401b"
          ],
          "anchor": {
            "X": 422,
            "Y": -17.666666666666664
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "String",
          "value": "3",
          "id": "019f08aa-87a9-7f69-8f7c-8a359cc70dc9",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08aa-87a9-7683-94dd-4d0449c37a7f",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f08b2-156d-79a6-937f-09f7232f8175"
          ],
          "anchor": {
            "X": 641.3333333333334,
            "Y": -17.666666666666664
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ]
    },
    {
      "$type": "ForLoop",
      "id": "019f08b1-c792-758f-84e9-1ac4a040502c",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 30,
        "Y": 90
      },
      "size": {
        "Width": 310,
        "Height": 231.33333333333334
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08b1-c792-7ccf-a55f-421d3ea106bb",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f08b1-e96c-7147-ae0b-258b6f18cb18"
          ],
          "anchor": {
            "X": 47,
            "Y": 132.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "Int64",
          "Value": 0,
          "id": "019f08b1-c798-7a2a-934f-e05e039854b9",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null,
          "value": 0
        },
        {
          "$type": "Int64",
          "Value": 3,
          "id": "019f08b1-c798-7d0b-9de2-6a925d1ac783",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null,
          "value": 3
        },
        {
          "$type": "String",
          "value": "index",
          "id": "019f08b1-c798-733b-9882-e7fb33026eb8",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "Int64",
          "Value": 0,
          "id": "019f08b1-c798-7fc2-b6e7-6c5d9fdae0b0",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null,
          "value": 0
        },
        {
          "$type": "Order",
          "value": null,
          "id": "019f08b1-c798-7341-8994-987fd90fb8a6",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f08b6-d028-762b-96c2-eb5855104a6f"
          ],
          "anchor": {
            "X": 47,
            "Y": 305
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08b1-c798-767c-9056-b839bfda5cbb",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f08b2-11ac-7b96-8f92-d8f661bf401b"
          ],
          "anchor": {
            "X": 322.33333333333337,
            "Y": 132.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ]
    },
    {
      "$type": "GetVariable",
      "id": "019f08b6-741d-7ef8-846e-e0f4d873b1a1",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -405,
        "Y": 270
      },
      "size": {
        "Width": 290.6666666666667,
        "Height": 66.66666666666667
      },
      "inputs": [
        {
          "$type": "String",
          "value": "index",
          "id": "019f08b6-741d-7d8b-b178-29d7f0806ea7",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b6-741d-7ef8-846e-e0f4d873b1a1",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Int64",
          "Value": 0,
          "id": "019f08b6-741d-7b14-aa8c-04d7dba4ab42",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b6-741d-7ef8-846e-e0f4d873b1a1",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f08b6-b2e8-7ae9-9209-babf3a242bb4"
          ],
          "anchor": {
            "X": -134,
            "Y": 310.3333333333333
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null,
          "value": 0
        }
      ]
    },
    {
      "$type": "Log",
      "id": "019f08b6-9031-735c-9ad8-a3198a81f807",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -315,
        "Y": 90
      },
      "size": {
        "Width": 256.6666666666667,
        "Height": 121.33333333333333
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08b6-9031-7740-ae69-f505ca3fb04e",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b6-9031-735c-9ad8-a3198a81f807",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f08b6-c978-77f0-97c1-f7c8b3e8d712"
          ],
          "anchor": {
            "X": -298,
            "Y": 132.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "String",
          "value": "index: {}",
          "id": "019f08b6-9031-7200-8de2-c48754d8bfca",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b6-9031-735c-9ad8-a3198a81f807",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "is_connected": false,
          "layout_orientation": 0,
          "value_editor": null
        },
        {
          "$type": "String",
          "value": "",
          "id": "019f08b6-a9fc-7ece-9e9b-9596bf0ff229",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b6-9031-735c-9ad8-a3198a81f807",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 1,
          "connections": [
            "019f08b6-b2e8-7ae9-9209-babf3a242bb4"
          ],
          "anchor": {
            "X": -298,
            "Y": 196.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f08b6-9031-761f-84c8-e2a086936e77",
          "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "node_id": "019f08b6-9031-735c-9ad8-a3198a81f807",
          "option_id": "00000000-0000-0000-0000-000000000000",
          "option_index": 0,
          "usage_type": 2,
          "connections": [
            "019f08b6-d028-762b-96c2-eb5855104a6f"
          ],
          "anchor": {
            "X": -76,
            "Y": 132.33333333333334
          },
          "is_connected": true,
          "layout_orientation": 0,
          "value_editor": null
        }
      ]
    }
  ],
  "connections": [
    {
      "id": "019f08b2-156d-79a6-937f-09f7232f8175",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
      "target_node_id": "019f0886-6946-77c3-be17-18402e7edab1",
      "source_id": "019f08aa-87a9-7683-94dd-4d0449c37a7f",
      "target_id": "019f0886-6946-7500-9074-12951da1b34b"
    },
    {
      "id": "019f08a9-701b-79b9-9d57-92039f6b01c8",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f0886-6948-7422-8080-5e5425838ec5",
      "target_node_id": "019f08a9-6229-7745-a8c2-e0ae332c3ef5",
      "source_id": "019f0886-6948-7549-aba6-7c6a62af1a2c",
      "target_id": "019f08a9-6229-7d84-aee1-18f4c9b472e1"
    },
    {
      "id": "019f08b2-11ac-7b96-8f92-d8f661bf401b",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
      "target_node_id": "019f08aa-87a9-7d5c-bd96-3d0958a06287",
      "source_id": "019f08b1-c798-767c-9056-b839bfda5cbb",
      "target_id": "019f08aa-87a9-70eb-80b0-9718269f7bb4"
    },
    {
      "id": "019f08b1-e96c-7147-ae0b-258b6f18cb18",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f08a9-6229-7745-a8c2-e0ae332c3ef5",
      "target_node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
      "source_id": "019f08a9-6229-7164-96d3-e2b87b47abaf",
      "target_id": "019f08b1-c792-7ccf-a55f-421d3ea106bb"
    },
    {
      "id": "019f08b6-d028-762b-96c2-eb5855104a6f",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f08b6-9031-735c-9ad8-a3198a81f807",
      "target_node_id": "019f08b1-c792-758f-84e9-1ac4a040502c",
      "source_id": "019f08b6-9031-761f-84c8-e2a086936e77",
      "target_id": "019f08b1-c798-7341-8994-987fd90fb8a6"
    },
    {
      "id": "019f08b6-c978-77f0-97c1-f7c8b3e8d712",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f0886-6948-7422-8080-5e5425838ec5",
      "target_node_id": "019f08b6-9031-735c-9ad8-a3198a81f807",
      "source_id": "019f0886-6948-7549-aba6-7c6a62af1a2c",
      "target_id": "019f08b6-9031-7740-ae69-f505ca3fb04e"
    },
    {
      "id": "019f08b6-b2e8-7ae9-9209-babf3a242bb4",
      "program_id": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "source_node_id": "019f08b6-741d-7ef8-846e-e0f4d873b1a1",
      "target_node_id": "019f08b6-9031-735c-9ad8-a3198a81f807",
      "source_id": "019f08b6-741d-7b14-aa8c-04d7dba4ab42",
      "target_id": "019f08b6-a9fc-7ece-9e9b-9596bf0ff229"
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