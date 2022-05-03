"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[44070],{9990:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-373d8e25",path:"/devices/ZNXNKG02LM.html",title:"Xiaomi ZNXNKG02LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi ZNXNKG02LM control via MQTT",description:"Integrate your Xiaomi ZNXNKG02LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-01T17:18:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Operation_mode (enum)",slug:"operation-mode-enum",children:[]},{level:3,title:"Action_rotation_angle (numeric)",slug:"action-rotation-angle-numeric",children:[]},{level:3,title:"Action_rotation_angle_speed (numeric)",slug:"action-rotation-angle-speed-numeric",children:[]},{level:3,title:"Action_rotation_percent (numeric)",slug:"action-rotation-percent-numeric",children:[]},{level:3,title:"Action_rotation_percent_speed (numeric)",slug:"action-rotation-percent-speed-numeric",children:[]},{level:3,title:"Action_rotation_time (numeric)",slug:"action-rotation-time-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZNXNKG02LM.md",git:{updatedTime:165159912e4}}},90419:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var i=o(66252);const a=(0,i.uE)('<h1 id="xiaomi-znxnkg02lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-znxnkg02lm" aria-hidden="true">#</a> Xiaomi ZNXNKG02LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZNXNKG02LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara knob H1 (wireless)</td></tr><tr><td>Exposes</td><td>battery, voltage, action, operation_mode, action_rotation_angle, action_rotation_angle_speed, action_rotation_percent, action_rotation_percent_speed, action_rotation_time, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZNXNKG02LM.jpg" alt="Xiaomi ZNXNKG02LM"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),n=(0,i.Uk)("How to use device type specific configuration"),d=(0,i.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>hold</code>, <code>release</code>, <code>start_rotating</code>, <code>rotation</code>, <code>stop_rotating</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation_mode (enum)</h3><p>Button mode. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>event</code>, <code>command</code>.</p><h3 id="action-rotation-angle-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-angle-numeric" aria-hidden="true">#</a> Action_rotation_angle (numeric)</h3><p>Rotation angle. Value can be found in the published state on the <code>action_rotation_angle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>*</code>.</p><h3 id="action-rotation-angle-speed-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-angle-speed-numeric" aria-hidden="true">#</a> Action_rotation_angle_speed (numeric)</h3><p>Rotation angle speed. Value can be found in the published state on the <code>action_rotation_angle_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>*</code>.</p><h3 id="action-rotation-percent-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-percent-numeric" aria-hidden="true">#</a> Action_rotation_percent (numeric)</h3><p>Rotation percent. Value can be found in the published state on the <code>action_rotation_percent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="action-rotation-percent-speed-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-percent-speed-numeric" aria-hidden="true">#</a> Action_rotation_percent_speed (numeric)</h3><p>Rotation percent speed. Value can be found in the published state on the <code>action_rotation_percent_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="action-rotation-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-rotation-time-numeric" aria-hidden="true">#</a> Action_rotation_time (numeric)</h3><p>Rotation time. Value can be found in the published state on the <code>action_rotation_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),r={},c=(0,o(83744).Z)(r,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[n])),_:1})])]),d],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);