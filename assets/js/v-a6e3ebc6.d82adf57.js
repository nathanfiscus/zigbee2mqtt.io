"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10324],{48849:(e,t,i)=>{i.r(t),i.d(t,{data:()=>d});const d={key:"v-a6e3ebc6",path:"/devices/TS004F.html",title:"TuYa TS004F control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS004F control via MQTT",description:"Integrate your TuYa TS004F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-05-30T19:17:03.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Serialnumber",slug:"serialnumber",children:[]},{level:3,title:"Button positions",slug:"button-positions",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Device modes",slug:"device-modes",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS004F.md",git:{updatedTime:165159912e4}}},8558:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const d=(0,i(66252).uE)('<h1 id="tuya-ts004f" tabindex="-1"><a class="header-anchor" href="#tuya-ts004f" aria-hidden="true">#</a> TuYa TS004F</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS004F</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Wireless switch with 4 buttons</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS004F.jpg" alt="TuYa TS004F"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="serialnumber" tabindex="-1"><a class="header-anchor" href="#serialnumber" aria-hidden="true">#</a> Serialnumber</h3><table><thead><tr><th>Location</th><th>Serial</th></tr></thead><tbody><tr><td>Above the battery</td><td>ESW-OZBA-EU</td></tr></tbody></table><h3 id="button-positions" tabindex="-1"><a class="header-anchor" href="#button-positions" aria-hidden="true">#</a> Button positions</h3><table><thead><tr><th>1</th><th>2</th></tr></thead><tbody><tr><td>3</td><td>4</td></tr></tbody></table><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To enter pairing mode hold button 3 (about 10 seconds) until all 4 LEDs start flashing.</p><h3 id="device-modes" tabindex="-1"><a class="header-anchor" href="#device-modes" aria-hidden="true">#</a> Device modes</h3><p>This device has two modes:</p><ol><li>dimmer mode</li><li>switch mode <em>(to have the 12 actions mentioned below)</em></li></ol><p>To switch between modes hold buttons 2+4 (about 6 seconds) until light 3 flashes once.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>1_single</code>, <code>1_double</code>, <code>1_hold</code>, <code>2_single</code>, <code>2_double</code>, <code>2_hold</code>, <code>3_single</code>, <code>3_double</code>, <code>3_hold</code>, <code>4_single</code>, <code>4_double</code>, <code>4_hold</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),a={},o=(0,i(83744).Z)(a,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,d]of t)e[i]=d;return e}}}]);