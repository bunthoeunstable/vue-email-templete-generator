<template>
  <div class="app-wrapper" style="max-width:550px;">  

    <div v-for="v in dropped">
        <div v-if="v.key=='text'" :style="returnStyles(v, v.key)">{{v.text}}</div>
        <div v-else-if="v.key=='image'" :style="returnStyleSibling(v.sibling)">
            <img :style="returnStyles(v, v.key)" :src="v.src"/>   
            <div v-if="v.caption" style="text-align:center;font-size:12px;">{{v.caption}}</div>      
        </div>
        <div v-else-if="v.key=='button'" style="text-align:center;clear:both;"><a class="btn is-info" :style="returnStyles(v, v.key)" :href="v.href">{{v.label}} </a></div>
        <div v-else-if="v.key=='divider'" :style="returnStyles(v, v.key)"><hr/></div>

        <div v-if="v.sibling" :style="returnStyleSibling(v.sibling)">
            <div v-if="v.sibling.key=='text'" :style="returnStyles(v.sibling, v.sibling.key)">{{v.sibling.text}}</div>
            <div v-else-if="v.sibling.key=='image'">
               <img :style="returnStyles(v.sibling, v.sibling.key)" :src="v.sibling.src"/>           
            </div>
            <div v-else-if="v.sibling.key=='button'" style="text-align:center;clear:both;"><a :style="returnStyles(v.sibling, v.sibling.key)" :href="v.sibling.href">{{v.sibling.label}} </a></div>
            <div v-else-if="v.sibling.key=='divider'" :style="returnStyles(v.sibling, v.sibling.key)"><hr/></div>
        </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'ViewHtml',
  components: {

  },

  data ()
  {
    return {
        dropped: [],
        innerStyle:""
    };
  },

  /**
   * Attach listeners that handle state manipulation
   */
  mounted()
  {
    this.load();
  },

  watch:
  {
    
  },

  methods:
  {
    /**
     * Check for local browser storage
     */
    load()
    {
      this.dropped = localStorage.getItem('dropped') ? JSON.parse(localStorage.getItem('dropped')) : [];
     
    }, returnStyles(obj, type){      
        this.innerStyle = "";
        for (const key in obj){

            let style = key+":"+obj[key]+";";
            if(key=="fontSize"){              
                if(obj[key]=="wicked-big"){
                  style = "font-size: 35px;";
                }else if(obj[key]=="big"){
                  style = "font-size: 25px;";
                } else if (obj[key]=="medium"){
                  style = "font-size: 16px;";
                }else{
                  style = "font-size: 12px;";
                } 
            }

            if(obj[key].sibling){
              style += "width:50%;";
            }
            if(key=="bold" && obj[key]==true){
               style = "font-weight: bold;";
            }
           if(key=="justify" && obj[key]=="centered"){
               style = "text-align:center;";
            }       
            this.innerStyle += style;
        };
        
         if(type=="button"){
                this.innerStyle += "height:32px;border-radius: 3px;line-height:24px;display:inline-flex;padding-left:10px;padding-right:10px; align-items: center; border: 1px solid #dbdbdb; position: relative; vertical-align: top; justify-content: center;";
                this.innerStyle += "background:"+obj['color']+";";
                if(obj['color'] != "white"){
                    this.innerStyle += "color:white;";
                }else{
                    this.innerStyle += "color:black;";
                }                 
          }

        this.innerStyle += "clear:both;";
        return this.innerStyle;

    }, returnStyleSibling(v){
       if(v){
         return  "width:50%;float:left; padding: 5px;";
       }
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma'
@import './assets/sass/library'

.app-wrapper
  margin: 0 auto
  max-width: 1000px
  margin-top: 0px
  height: 900px

.app-heading
  margin-bottom: 20px
  .title
    color: $blue

.app-control
  padding-left: 35px
  padding-bottom: 10px
  background: white
  &:not(:last-child)
    margin: 0
</style>
