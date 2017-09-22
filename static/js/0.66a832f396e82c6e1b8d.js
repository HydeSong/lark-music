webpackJsonp([0],{576:function(t,i,n){n(615);var e=n(9)(n(594),n(627),"data-v-9045876c",null);t.exports=e.exports},580:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(56),a=n.n(e),s=n(64),o=n.n(s),A=n(197),l=n.n(A),r=n(198),c=n.n(r),d=n(126),p=n(86),g=n(47),u=n.i(d.a)("transform"),C=n.i(d.a)("backdrop-filter");i.default={mixins:[p.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:a()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},n.i(g.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTransalteY,t),n=1,e=0,a=0,s=Math.abs(t/this.imageHeight);t>0?(n=1+s,e=10):a=Math.min(20,20*s),this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)",this.$refs.filter.style[C]="blur("+a+"px)",t<this.minTransalteY?(e=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[u]="scale("+n+")",this.$refs.bgImage.style.zIndex=e}},components:{Scroll:o.a,Loading:l.a,SongList:c.a}}},581:function(t,i,n){i=t.exports=n(570)(!0),i.push([t.i,".music-list[data-v-16561a84]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-16561a84]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-16561a84]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-16561a84]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-16561a84]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-16561a84]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-16561a84]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-16561a84]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-16561a84]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-16561a84]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-16561a84]{position:relative;height:100%;background:#222}.music-list .list[data-v-16561a84]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-16561a84]{padding:20px 30px}.music-list .list .loading-container[data-v-16561a84]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["/Users/hyde/Documents/Work/github/Lark/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-16561a84] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-16561a84] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-16561a84] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-16561a84] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-16561a84] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-16561a84] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-16561a84] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-16561a84] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-16561a84] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-16561a84] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-16561a84] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-16561a84] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-16561a84] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-16561a84] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},582:function(t,i,n){var e=n(581);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(571)("6c2c88c4",e,!0)},583:function(t,i,n){n(582);var e=n(9)(n(580),n(584),"data-v-16561a84",null);t.exports=e.exports},584:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"music-list"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[n("div",{staticClass:"play-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[n("i",{staticClass:"icon-play"}),t._v(" "),n("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),n("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),n("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),n("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[n("div",{staticClass:"song-list-wrapper"},[n("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[n("loading")],1)])],1)},staticRenderFns:[]}},587:function(t,i,n){"use strict";function e(){var t=o()({},l.d,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:1664029744});return n.i(A.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.e)}function a(t){var i=o()({},l.d,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",bigin:0,num:100,songstatus:1,singermid:t,g_tk:1664029744});return n.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,l.e)}i.b=e,i.a=a;var s=n(87),o=n.n(s),A=n(196),l=n(63)},594:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(56),a=n.n(e),s=n(47),o=n(587),A=n(63),l=n(127),r=n(583),c=n.n(r);i.default={data:function(){return{songs:[]}},computed:a()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},n.i(s.a)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;if(!this.singer.id)return void this.$router.push("/singer");n.i(o.a)(this.singer.id).then(function(i){i.code===A.b&&(t.songs=t._normalizeSongs(i.data.list))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){var e=t.musicData;e.songid&&e.albummid&&i.push(n.i(l.b)(e))}),i}},components:{MusicList:c.a}}},605:function(t,i,n){i=t.exports=n(570)(!0),i.push([t.i,".slide-enter-active[data-v-9045876c],.slide-leave-active[data-v-9045876c]{transition:all .3s}.slide-enter[data-v-9045876c],.slide-leave-to[data-v-9045876c]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["/Users/hyde/Documents/Work/github/Lark/src/components/singer-detail/singer-detail.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"singer-detail.vue",sourcesContent:["\n.slide-enter-active[data-v-9045876c],\n.slide-leave-active[data-v-9045876c] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-9045876c],\n.slide-leave-to[data-v-9045876c] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},615:function(t,i,n){var e=n(605);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(571)("4bc4c13c",e,!0)},627:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{songs:t.songs,"bg-image":t.bgImage,title:t.title}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.66a832f396e82c6e1b8d.js.map