export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'serialnum',
        type: 'string',
        title: 'serialnum'
      },
      {
        name: 'price',
        type: 'number',
        title: 'price'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      
        options: {
          list: ['mens collection', 'womens collection'],
          // You can add more categories as needed.
        },
      },

      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options:{
        source: 'title',

        }
      },
      {
        title: 'poster',
        name: 'poster',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        
      },
     
      
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of:[

            {
                type : 'block'
            },
            
            {
                type : 'image',
                fields:[
                    {
                         type: 'text',
                         name :'alt',
                         title: 'Alternative Text',
                    }
                ]
            },
        ]
      },
    ]


  
  }