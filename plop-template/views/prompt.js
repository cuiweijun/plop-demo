
module.exports = {
    "description":"generator a component",
    "prompts":[
        {
            type: 'input',    //提示信息的类型 input 输入 checkbox 选择 list 列表
            name: 'view',  //字段的名称
            message: 'controller name please'  //提示的信息说明
        },
        {
            type: 'checkbox',
            name: 'blocks',
            message: 'Blocks:',
            choices: [
            {
              name: '<template>',
              value: 'template',
              checked: true
            },
            {
              name: '<script>',
              value: 'script',
              checked: true
            },
            {
              name: 'style',
              value: 'style',
              checked: true
            }
        ]
        }
    ],
    actions:function(data){
        
        const configs = [
            {
            type:"add",
            path:"views/{{view}}.vue",
            templateFile:"plop-template/views/index.hbs",
            data:{
                name:data.name,
                template:data.blocks[0],
                script:data.blocks[1],
                style:data.blocks[2]
            }
            }
        ]
        console.log(data)
        return configs;
    }
}