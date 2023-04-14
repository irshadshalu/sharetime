import{H as ta}from"./control.e7f5239e.js";function ia(l,D){return new ta(l,D)}new TextEncoder;var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z={},ra={get exports(){return Z},set exports(l){Z=l}};(function(l,D){(function(k,M){l.exports=M()})(R,function(){var k=1e3,M=6e4,N=36e5,z="millisecond",h="second",d="minute",o="hour",E="day",_="week",S="month",m="quarter",b="year",A="date",t="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var i=["th","st","nd","rd"],a=r%100;return"["+r+(i[(a-20)%10]||i[a]||i[0])+"]"}},y=function(r,i,a){var s=String(r);return!s||s.length>=i?r:""+Array(i+1-s.length).join(a)+r},L={s:y,z:function(r){var i=-r.utcOffset(),a=Math.abs(i),s=Math.floor(a/60),e=a%60;return(i<=0?"+":"-")+y(s,2,"0")+":"+y(e,2,"0")},m:function r(i,a){if(i.date()<a.date())return-r(a,i);var s=12*(a.year()-i.year())+(a.month()-i.month()),e=i.clone().add(s,S),u=a-e<0,n=i.clone().add(s+(u?-1:1),S);return+(-(s+(a-e)/(u?e-n:n-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:S,y:b,w:_,d:E,D:A,h:o,m:d,s:h,ms:z,Q:m}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},x="en",w={};w[x]=v;var B=function(r){return r instanceof O},G=function r(i,a,s){var e;if(!i)return x;if(typeof i=="string"){var u=i.toLowerCase();w[u]&&(e=u),a&&(w[u]=a,e=u);var n=i.split("-");if(!e&&n.length>1)return r(n[0])}else{var T=i.name;w[T]=i,e=T}return!s&&e&&(x=e),e||!s&&x},p=function(r,i){if(B(r))return r.clone();var a=typeof i=="object"?i:{};return a.date=r,a.args=arguments,new O(a)},c=L;c.l=G,c.i=B,c.w=function(r,i){return p(r,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var O=function(){function r(a){this.$L=G(a.locale,null,!0),this.parse(a)}var i=r.prototype;return i.parse=function(a){this.$d=function(s){var e=s.date,u=s.utc;if(e===null)return new Date(NaN);if(c.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var n=e.match(f);if(n){var T=n[2]-1||0,$=(n[7]||"0").substring(0,3);return u?new Date(Date.UTC(n[1],T,n[3]||1,n[4]||0,n[5]||0,n[6]||0,$)):new Date(n[1],T,n[3]||1,n[4]||0,n[5]||0,n[6]||0,$)}}return new Date(e)}(a),this.$x=a.x||{},this.init()},i.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},i.$utils=function(){return c},i.isValid=function(){return this.$d.toString()!==t},i.isSame=function(a,s){var e=p(a);return this.startOf(s)<=e&&e<=this.endOf(s)},i.isAfter=function(a,s){return p(a)<this.startOf(s)},i.isBefore=function(a,s){return this.endOf(s)<p(a)},i.$g=function(a,s,e){return c.u(a)?this[s]:this.set(e,a)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(a,s){var e=this,u=!!c.u(s)||s,n=c.p(a),T=function(W,Y){var K=c.w(e.$u?Date.UTC(e.$y,Y,W):new Date(e.$y,Y,W),e);return u?K:K.endOf(E)},$=function(W,Y){return c.w(e.toDate()[W].apply(e.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(Y)),e)},g=this.$W,P=this.$M,H=this.$D,I="set"+(this.$u?"UTC":"");switch(n){case b:return u?T(1,0):T(31,11);case S:return u?T(1,P):T(0,P+1);case _:var j=this.$locale().weekStart||0,V=(g<j?g+7:g)-j;return T(u?H-V:H+(6-V),P);case E:case A:return $(I+"Hours",0);case o:return $(I+"Minutes",1);case d:return $(I+"Seconds",2);case h:return $(I+"Milliseconds",3);default:return this.clone()}},i.endOf=function(a){return this.startOf(a,!1)},i.$set=function(a,s){var e,u=c.p(a),n="set"+(this.$u?"UTC":""),T=(e={},e[E]=n+"Date",e[A]=n+"Date",e[S]=n+"Month",e[b]=n+"FullYear",e[o]=n+"Hours",e[d]=n+"Minutes",e[h]=n+"Seconds",e[z]=n+"Milliseconds",e)[u],$=u===E?this.$D+(s-this.$W):s;if(u===S||u===b){var g=this.clone().set(A,1);g.$d[T]($),g.init(),this.$d=g.set(A,Math.min(this.$D,g.daysInMonth())).$d}else T&&this.$d[T]($);return this.init(),this},i.set=function(a,s){return this.clone().$set(a,s)},i.get=function(a){return this[c.p(a)]()},i.add=function(a,s){var e,u=this;a=Number(a);var n=c.p(s),T=function(P){var H=p(u);return c.w(H.date(H.date()+Math.round(P*a)),u)};if(n===S)return this.set(S,this.$M+a);if(n===b)return this.set(b,this.$y+a);if(n===E)return T(1);if(n===_)return T(7);var $=(e={},e[d]=M,e[o]=N,e[h]=k,e)[n]||1,g=this.$d.getTime()+a*$;return c.w(g,this)},i.subtract=function(a,s){return this.add(-1*a,s)},i.format=function(a){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||t;var u=a||"YYYY-MM-DDTHH:mm:ssZ",n=c.z(this),T=this.$H,$=this.$m,g=this.$M,P=e.weekdays,H=e.months,I=function(Y,K,F,J){return Y&&(Y[K]||Y(s,u))||F[K].slice(0,J)},j=function(Y){return c.s(T%12||12,Y,"0")},V=e.meridiem||function(Y,K,F){var J=Y<12?"AM":"PM";return F?J.toLowerCase():J},W={YY:String(this.$y).slice(-2),YYYY:this.$y,M:g+1,MM:c.s(g+1,2,"0"),MMM:I(e.monthsShort,g,H,3),MMMM:I(H,g),D:this.$D,DD:c.s(this.$D,2,"0"),d:String(this.$W),dd:I(e.weekdaysMin,this.$W,P,2),ddd:I(e.weekdaysShort,this.$W,P,3),dddd:P[this.$W],H:String(T),HH:c.s(T,2,"0"),h:j(1),hh:j(2),a:V(T,$,!0),A:V(T,$,!1),m:String($),mm:c.s($,2,"0"),s:String(this.$s),ss:c.s(this.$s,2,"0"),SSS:c.s(this.$ms,3,"0"),Z:n};return u.replace(C,function(Y,K){return K||W[Y]||n.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(a,s,e){var u,n=c.p(s),T=p(a),$=(T.utcOffset()-this.utcOffset())*M,g=this-T,P=c.m(this,T);return P=(u={},u[b]=P/12,u[S]=P,u[m]=P/3,u[_]=(g-$)/6048e5,u[E]=(g-$)/864e5,u[o]=g/N,u[d]=g/M,u[h]=g/k,u)[n]||g,e?P:c.a(P)},i.daysInMonth=function(){return this.endOf(S).$D},i.$locale=function(){return w[this.$L]},i.locale=function(a,s){if(!a)return this.$L;var e=this.clone(),u=G(a,s,!0);return u&&(e.$L=u),e},i.clone=function(){return c.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},r}(),ea=O.prototype;return p.prototype=ea,[["$ms",z],["$s",h],["$m",d],["$H",o],["$W",E],["$M",S],["$y",b],["$D",A]].forEach(function(r){ea[r[1]]=function(i){return this.$g(i,r[0],r[1])}}),p.extend=function(r,i){return r.$i||(r(i,O,p),r.$i=!0),p},p.locale=G,p.isDayjs=B,p.unix=function(r){return p(1e3*r)},p.en=w[x],p.Ls=w,p.p={},p})})(ra);const U=Z;var q={},sa={get exports(){return q},set exports(l){q=l}};(function(l,D){(function(k,M){l.exports=M()})(R,function(){var k={year:0,month:1,day:2,hour:3,minute:4,second:5},M={};return function(N,z,h){var d,o=function(m,b,A){A===void 0&&(A={});var t=new Date(m),f=function(C,v){v===void 0&&(v={});var y=v.timeZoneName||"short",L=C+"|"+y,x=M[L];return x||(x=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:C,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:y}),M[L]=x),x}(b,A);return f.formatToParts(t)},E=function(m,b){for(var A=o(m,b),t=[],f=0;f<A.length;f+=1){var C=A[f],v=C.type,y=C.value,L=k[v];L>=0&&(t[L]=parseInt(y,10))}var x=t[3],w=x===24?0:x,B=t[0]+"-"+t[1]+"-"+t[2]+" "+w+":"+t[4]+":"+t[5]+":000",G=+m;return(h.utc(B).valueOf()-(G-=G%1e3))/6e4},_=z.prototype;_.tz=function(m,b){m===void 0&&(m=d);var A=this.utcOffset(),t=this.toDate(),f=t.toLocaleString("en-US",{timeZone:m}),C=Math.round((t-new Date(f))/1e3/60),v=h(f).$set("millisecond",this.$ms).utcOffset(15*-Math.round(t.getTimezoneOffset()/15)-C,!0);if(b){var y=v.utcOffset();v=v.add(A-y,"minute")}return v.$x.$timezone=m,v},_.offsetName=function(m){var b=this.$x.$timezone||h.tz.guess(),A=o(this.valueOf(),b,{timeZoneName:m}).find(function(t){return t.type.toLowerCase()==="timezonename"});return A&&A.value};var S=_.startOf;_.startOf=function(m,b){if(!this.$x||!this.$x.$timezone)return S.call(this,m,b);var A=h(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return S.call(A,m,b).tz(this.$x.$timezone,!0)},h.tz=function(m,b,A){var t=A&&b,f=A||b||d,C=E(+h(),f);if(typeof m!="string")return h(m).tz(f);var v=function(w,B,G){var p=w-60*B*1e3,c=E(p,G);if(B===c)return[p,B];var O=E(p-=60*(c-B)*1e3,G);return c===O?[p,c]:[w-60*Math.min(c,O)*1e3,Math.max(c,O)]}(h.utc(m,t).valueOf(),C,f),y=v[0],L=v[1],x=h(y).utcOffset(L);return x.$x.$timezone=f,x},h.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},h.tz.setDefault=function(m){d=m}}})})(sa);const na=q;var Q={},ua={get exports(){return Q},set exports(l){Q=l}};(function(l,D){(function(k,M){l.exports=M()})(R,function(){var k="minute",M=/[+-]\d\d(?::?\d\d)?/g,N=/([+-]|\d\d)/g;return function(z,h,d){var o=h.prototype;d.utc=function(t){var f={date:t,utc:!0,args:arguments};return new h(f)},o.utc=function(t){var f=d(this.toDate(),{locale:this.$L,utc:!0});return t?f.add(this.utcOffset(),k):f},o.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var E=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),E.call(this,t)};var _=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else _.call(this)};var S=o.utcOffset;o.utcOffset=function(t,f){var C=this.$utils().u;if(C(t))return this.$u?0:C(this.$offset)?S.call(this):this.$offset;if(typeof t=="string"&&(t=function(x){x===void 0&&(x="");var w=x.match(M);if(!w)return null;var B=(""+w[0]).match(N)||["-",0,0],G=B[0],p=60*+B[1]+ +B[2];return p===0?0:G==="+"?p:-p}(t),t===null))return this;var v=Math.abs(t)<=16?60*t:t,y=this;if(f)return y.$offset=v,y.$u=t===0,y;if(t!==0){var L=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(y=this.local().add(v+L,k)).$offset=v,y.$x.$localOffset=L}else y=this.utc();return y};var m=o.format;o.format=function(t){var f=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,f)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var b=o.toDate;o.toDate=function(t){return t==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():b.call(this)};var A=o.diff;o.diff=function(t,f,C){if(t&&this.$u===t.$u)return A.call(this,t,f,C);var v=this.local(),y=d(t).local();return A.call(v,y,f,C)}}})})(ua);const oa=Q;var X={},ca={get exports(){return X},set exports(l){X=l}};(function(l,D){(function(k,M){l.exports=M()})(R,function(){var k={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(M,N,z){var h=N.prototype,d=h.format;z.en.formats=k,h.format=function(o){o===void 0&&(o="YYYY-MM-DDTHH:mm:ssZ");var E=this.$locale().formats,_=function(S,m){return S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(b,A,t){var f=t&&t.toUpperCase();return A||m[t]||k[t]||m[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(C,v,y){return v||y.slice(1)})})}(o,E===void 0?{}:E);return d.call(this,_)}}})})(ca);const da=X;var aa={},la={get exports(){return aa},set exports(l){aa=l}};(function(l,D){(function(k,M){l.exports=M()})(R,function(){return function(k,M){var N=M.prototype,z=N.format;N.format=function(h){var d=this,o=this.$locale();if(!this.isValid())return z.bind(this)(h);var E=this.$utils(),_=(h||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(S){switch(S){case"Q":return Math.ceil((d.$M+1)/3);case"Do":return o.ordinal(d.$D);case"gggg":return d.weekYear();case"GGGG":return d.isoWeekYear();case"wo":return o.ordinal(d.week(),"W");case"w":case"ww":return E.s(d.week(),S==="w"?1:2,"0");case"W":case"WW":return E.s(d.isoWeek(),S==="W"?1:2,"0");case"k":case"kk":return E.s(String(d.$H===0?24:d.$H),S==="k"?1:2,"0");case"X":return Math.floor(d.$d.getTime()/1e3);case"x":return d.$d.getTime();case"z":return"["+d.offsetName()+"]";case"zzz":return"["+d.offsetName("long")+"]";default:return S}});return z.bind(this)(_)}}})})(la);const fa=aa,ma=[{value:"Dateline Standard Time",abbr:"DST",offset:-12,isdst:!1,text:"-12:00 International Date Line West",display:"-12:00",utc:["Etc/GMT+12"]},{value:"UTC-11",abbr:"U",offset:-11,isdst:!1,text:"(-11:00) Coordinated Universal Time-11",display:"-11:00",utc:["Etc/GMT+11","Pacific/Midway","Pacific/Niue","Pacific/Pago_Pago"]},{value:"Hawaiian Standard Time",abbr:"HST",offset:-10,isdst:!1,text:"(-10:00) Hawaii",display:"-10:00",utc:["Etc/GMT+10","Pacific/Honolulu","Pacific/Johnston","Pacific/Rarotonga","Pacific/Tahiti"]},{value:"Alaskan Standard Time",abbr:"AKDT",offset:-8,isdst:!0,text:"(-9:00) Alaska",display:"-9:00",utc:["America/Anchorage","America/Juneau","America/Nome","America/Sitka","America/Yakutat"]},{value:"Pacific Standard Time (Mexico)",abbr:"PDT",offset:-7,isdst:!0,text:"(-8:00) Baja California",display:"-8:00",utc:["America/Santa_Isabel"]},{value:"Pacific Daylight Time",abbr:"PDT",offset:-7,isdst:!0,text:"(-7:00) Pacific Daylight Time (US & Canada)",display:"-7:00",utc:["America/Los_Angeles","America/Tijuana","America/Vancouver"]},{value:"Pacific Standard Time",abbr:"PST",offset:-8,isdst:!1,text:"(-8:00) Pacific Standard Time (US & Canada)",display:"-8:00",utc:["America/Los_Angeles","America/Tijuana","America/Vancouver","PST8PDT"]},{value:"US Mountain Standard Time",abbr:"UMST",offset:-7,isdst:!1,text:"(-7:00) Arizona",display:"-7:00",utc:["America/Creston","America/Dawson","America/Dawson_Creek","America/Hermosillo","America/Phoenix","America/Whitehorse","Etc/GMT+7"]},{value:"Mountain Standard Time (Mexico)",abbr:"MDT",offset:-6,isdst:!0,text:"(-7:00) Chihuahua, La Paz, Mazatlan",display:"-7:00",utc:["America/Chihuahua","America/Mazatlan"]},{value:"Mountain Standard Time",abbr:"MDT",offset:-6,isdst:!0,text:"(-7:00) Mountain Time (US & Canada)",display:"-7:00",utc:["America/Boise","America/Cambridge_Bay","America/Denver","America/Edmonton","America/Inuvik","America/Ojinaga","America/Yellowknife","MST7MDT"]},{value:"Central America Standard Time",abbr:"CAST",offset:-6,isdst:!1,text:"(-6:00) Central America",display:"-6:00",utc:["America/Belize","America/Costa_Rica","America/El_Salvador","America/Guatemala","America/Managua","America/Tegucigalpa","Etc/GMT+6","Pacific/Galapagos"]},{value:"Central Standard Time",abbr:"CDT",offset:-5,isdst:!0,text:"(-6:00) Central Time (US & Canada)",display:"-6:00",utc:["America/Chicago","America/Indiana/Knox","America/Indiana/Tell_City","America/Matamoros","America/Menominee","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Rainy_River","America/Rankin_Inlet","America/Resolute","America/Winnipeg","CST6CDT"]},{value:"Central Standard Time (Mexico)",abbr:"CDT",offset:-5,isdst:!0,text:"(-6:00) Guadalajara, Mexico City, Monterrey",display:"-6:00",utc:["America/Bahia_Banderas","America/Cancun","America/Merida","America/Mexico_City","America/Monterrey"]},{value:"Canada Central Standard Time",abbr:"CCST",offset:-6,isdst:!1,text:"(-6:00) Saskatchewan",display:"-6:00",utc:["America/Regina","America/Swift_Current"]},{value:"SA Pacific Standard Time",abbr:"SPST",offset:-5,isdst:!1,text:"(-5:00) Bogota, Lima, Quito",display:"-5:00",utc:["America/Bogota","America/Cayman","America/Coral_Harbour","America/Eirunepe","America/Guayaquil","America/Jamaica","America/Lima","America/Panama","America/Rio_Branco","Etc/GMT+5"]},{value:"Eastern Standard Time",abbr:"EST",offset:-5,isdst:!1,text:"(-5:00) Eastern Time (US & Canada)",display:"-5:00",utc:["America/Detroit","America/Havana","America/Indiana/Petersburg","America/Indiana/Vincennes","America/Indiana/Winamac","America/Iqaluit","America/Kentucky/Monticello","America/Louisville","America/Montreal","America/Nassau","America/New_York","America/Nipigon","America/Pangnirtung","America/Port-au-Prince","America/Thunder_Bay","America/Toronto"]},{value:"Eastern Daylight Time",abbr:"EDT",offset:-4,isdst:!0,text:"(-4:00) Eastern Daylight Time (US & Canada)",display:"-4:00",utc:["America/Detroit","America/Havana","America/Indiana/Petersburg","America/Indiana/Vincennes","America/Indiana/Winamac","America/Iqaluit","America/Kentucky/Monticello","America/Louisville","America/Montreal","America/Nassau","America/New_York","America/Nipigon","America/Pangnirtung","America/Port-au-Prince","America/Thunder_Bay","America/Toronto"]},{value:"US Eastern Standard Time",abbr:"UEDT",offset:-5,isdst:!1,text:"(-5:00) Indiana (East)",display:"-5:00",utc:["America/Indiana/Marengo","America/Indiana/Vevay","America/Indianapolis"]},{value:"Venezuela Standard Time",abbr:"VST",offset:-4.5,isdst:!1,text:"(-4:30) Caracas",display:"-4:30",utc:["America/Caracas"]},{value:"Paraguay Standard Time",abbr:"PYT",offset:-4,isdst:!1,text:"(-4:00) Asuncion",display:"-4:00",utc:["America/Asuncion"]},{value:"Atlantic Standard Time",abbr:"ADT",offset:-3,isdst:!0,text:"(-4:00) Atlantic Time (Canada)",display:"-4:00",utc:["America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Moncton","America/Thule","Atlantic/Bermuda"]},{value:"Central Brazilian Standard Time",abbr:"CBST",offset:-4,isdst:!1,text:"(-4:00) Cuiaba",display:"-4:00",utc:["America/Campo_Grande","America/Cuiaba"]},{value:"SA Western Standard Time",abbr:"SWST",offset:-4,isdst:!1,text:"(-4:00) Georgetown, La Paz, Manaus, San Juan",display:"-4:00",utc:["America/Anguilla","America/Antigua","America/Aruba","America/Barbados","America/Blanc-Sablon","America/Boa_Vista","America/Curacao","America/Dominica","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guyana","America/Kralendijk","America/La_Paz","America/Lower_Princes","America/Manaus","America/Marigot","America/Martinique","America/Montserrat","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Santo_Domingo","America/St_Barthelemy","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tortola","Etc/GMT+4"]},{value:"Pacific SA Standard Time",abbr:"PSST",offset:-4,isdst:!1,text:"(-4:00) Santiago",display:"-4:00",utc:["America/Santiago","Antarctica/Palmer"]},{value:"Newfoundland Standard Time",abbr:"NDT",offset:-2.5,isdst:!0,text:"(-3:30) Newfoundland",display:"-3:30",utc:["America/St_Johns"]},{value:"E. South America Standard Time",abbr:"ESAST",offset:-3,isdst:!1,text:"(-3:00) Brasilia",display:"-3:00",utc:["America/Sao_Paulo"]},{value:"Argentina Standard Time",abbr:"AST",offset:-3,isdst:!1,text:"(-3:00) Buenos Aires",display:"-3:00",utc:["America/Argentina/La_Rioja","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Buenos_Aires","America/Catamarca","America/Cordoba","America/Jujuy","America/Mendoza"]},{value:"SA Eastern Standard Time",abbr:"SEST",offset:-3,isdst:!1,text:"(-3:00) Cayenne, Fortaleza",display:"-3:00",utc:["America/Araguaina","America/Belem","America/Cayenne","America/Fortaleza","America/Maceio","America/Paramaribo","America/Recife","America/Santarem","Antarctica/Rothera","Atlantic/Stanley","Etc/GMT+3"]},{value:"Greenland Standard Time",abbr:"GDT",offset:-3,isdst:!0,text:"(-3:00) Greenland",display:"-3:00",utc:["America/Godthab"]},{value:"Montevideo Standard Time",abbr:"MST",offset:-3,isdst:!1,text:"(-3:00) Montevideo",display:"-3:00",utc:["America/Montevideo"]},{value:"Bahia Standard Time",abbr:"BST",offset:-3,isdst:!1,text:"(-3:00) Salvador",display:"-3:00",utc:["America/Bahia"]},{value:"UTC-2",abbr:"U",offset:-2,isdst:!1,text:"(-2:00) Coordinated Universal Time-2",display:"-2:00",utc:["America/Noronha","Atlantic/South_Georgia","Etc/GMT+2"]},{value:"Mid-Atlantic Standard Time",abbr:"MDT",offset:-1,isdst:!0,text:"(-2:00) Mid-Atlantic - Old",display:"-2:00",utc:[]},{value:"Azores Standard Time",abbr:"ADT",offset:0,isdst:!0,text:"(-1:00) Azores",display:"-1:00",utc:["America/Scoresbysund","Atlantic/Azores"]},{value:"Cape Verde Standard Time",abbr:"CVST",offset:-1,isdst:!1,text:"(-1:00) Cape Verde Is.",display:"-1:00",utc:["Atlantic/Cape_Verde","Etc/GMT+1"]},{value:"Morocco Standard Time",abbr:"MDT",offset:1,isdst:!0,text:"() Casablanca",display:"()",utc:["Africa/Casablanca","Africa/El_Aaiun"]},{value:"UTC",abbr:"UTC",offset:0,isdst:!1,text:"() Coordinated Universal Time",display:"()",utc:["America/Danmarkshavn","Etc/GMT"]},{value:"GMT Standard Time",abbr:"GMT",offset:0,isdst:!1,text:"() Edinburgh, London",display:"() Edinburgh,",utc:["Europe/Isle_of_Man","Europe/Guernsey","Europe/Jersey","Europe/London"]},{value:"British Summer Time",abbr:"BST",offset:1,isdst:!0,text:"(+1:00) Edinburgh, London",display:"+1:00",utc:["Europe/Isle_of_Man","Europe/Guernsey","Europe/Jersey","Europe/London"]},{value:"GMT Standard Time",abbr:"GDT",offset:1,isdst:!0,text:"() Dublin, Lisbon",display:"() Dublin,",utc:["Atlantic/Canary","Atlantic/Faeroe","Atlantic/Madeira","Europe/Dublin","Europe/Lisbon"]},{value:"Greenwich Standard Time",abbr:"GST",offset:0,isdst:!1,text:"() Monrovia, Reykjavik",display:"() Monrovia,",utc:["Africa/Abidjan","Africa/Accra","Africa/Bamako","Africa/Banjul","Africa/Bissau","Africa/Conakry","Africa/Dakar","Africa/Freetown","Africa/Lome","Africa/Monrovia","Africa/Nouakchott","Africa/Ouagadougou","Africa/Sao_Tome","Atlantic/Reykjavik","Atlantic/St_Helena"]},{value:"W. Europe Standard Time",abbr:"WEDT",offset:2,isdst:!0,text:"(+1:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",display:"+1:00",utc:["Arctic/Longyearbyen","Europe/Amsterdam","Europe/Andorra","Europe/Berlin","Europe/Busingen","Europe/Gibraltar","Europe/Luxembourg","Europe/Malta","Europe/Monaco","Europe/Oslo","Europe/Rome","Europe/San_Marino","Europe/Stockholm","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Zurich"]},{value:"Central Europe Standard Time",abbr:"CET",offset:2,isdst:!0,text:"(+1:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",display:"+1:00",utc:["Europe/Belgrade","Europe/Bratislava","Europe/Budapest","Europe/Ljubljana","Europe/Podgorica","Europe/Prague","Europe/Tirane"]},{value:"Central Europe Standard Time",abbr:"CEDT",offset:2,isdst:!0,text:"(+1:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",display:"+1:00",utc:["Europe/Belgrade","Europe/Bratislava","Europe/Budapest","Europe/Ljubljana","Europe/Podgorica","Europe/Prague","Europe/Tirane"]},{value:"Romance Standard Time",abbr:"RDT",offset:2,isdst:!0,text:"(+1:00) Brussels, Copenhagen, Madrid, Paris",display:"+1:00",utc:["Africa/Ceuta","Europe/Brussels","Europe/Copenhagen","Europe/Madrid","Europe/Paris"]},{value:"Central European Standard Time",abbr:"CEDT",offset:2,isdst:!0,text:"(+1:00) Sarajevo, Skopje, Warsaw, Zagreb",display:"+1:00",utc:["Europe/Sarajevo","Europe/Skopje","Europe/Warsaw","Europe/Zagreb"]},{value:"W. Central Africa Standard Time",abbr:"WCAST",offset:1,isdst:!1,text:"(+1:00) West Central Africa",display:"+1:00",utc:["Africa/Algiers","Africa/Bangui","Africa/Brazzaville","Africa/Douala","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Luanda","Africa/Malabo","Africa/Ndjamena","Africa/Niamey","Africa/Porto-Novo","Africa/Tunis","Etc/GMT-1"]},{value:"Namibia Standard Time",abbr:"NST",offset:1,isdst:!1,text:"(+1:00) Windhoek",display:"+1:00",utc:["Africa/Windhoek"]},{value:"GTB Standard Time",abbr:"GDT",offset:3,isdst:!0,text:"(+2:00) Athens, Bucharest",display:"+2:00",utc:["Asia/Nicosia","Europe/Athens","Europe/Bucharest","Europe/Chisinau"]},{value:"Middle East Standard Time",abbr:"MEDT",offset:3,isdst:!0,text:"(+2:00) Beirut",display:"+2:00",utc:["Asia/Beirut"]},{value:"Egypt Standard Time",abbr:"EST",offset:2,isdst:!1,text:"(+2:00) Cairo",display:"+2:00",utc:["Africa/Cairo"]},{value:"Syria Standard Time",abbr:"SDT",offset:3,isdst:!0,text:"(+2:00) Damascus",display:"+2:00",utc:["Asia/Damascus"]},{value:"E. Europe Standard Time",abbr:"EEDT",offset:3,isdst:!0,text:"(+2:00) E. Europe",display:"+2:00",utc:["Asia/Nicosia","Europe/Athens","Europe/Bucharest","Europe/Chisinau","Europe/Helsinki","Europe/Kiev","Europe/Mariehamn","Europe/Nicosia","Europe/Riga","Europe/Sofia","Europe/Tallinn","Europe/Uzhgorod","Europe/Vilnius","Europe/Zaporozhye"]},{value:"South Africa Standard Time",abbr:"SAST",offset:2,isdst:!1,text:"(+2:00) Harare, Pretoria",display:"+2:00",utc:["Africa/Blantyre","Africa/Bujumbura","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Kigali","Africa/Lubumbashi","Africa/Lusaka","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Etc/GMT-2"]},{value:"FLE Standard Time",abbr:"FDT",offset:3,isdst:!0,text:"(+2:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",display:"+2:00",utc:["Europe/Helsinki","Europe/Kiev","Europe/Mariehamn","Europe/Riga","Europe/Sofia","Europe/Tallinn","Europe/Uzhgorod","Europe/Vilnius","Europe/Zaporozhye"]},{value:"Turkey Standard Time",abbr:"TDT",offset:3,isdst:!1,text:"(+3:00) Istanbul",display:"+3:00",utc:["Europe/Istanbul"]},{value:"Israel Standard Time",abbr:"JDT",offset:3,isdst:!0,text:"(+2:00) Jerusalem",display:"+2:00",utc:["Asia/Jerusalem"]},{value:"Libya Standard Time",abbr:"LST",offset:2,isdst:!1,text:"(+2:00) Tripoli",display:"+2:00",utc:["Africa/Tripoli"]},{value:"Jordan Standard Time",abbr:"JST",offset:3,isdst:!1,text:"(+3:00) Amman",display:"+3:00",utc:["Asia/Amman"]},{value:"Arabic Standard Time",abbr:"AST",offset:3,isdst:!1,text:"(+3:00) Baghdad",display:"+3:00",utc:["Asia/Baghdad"]},{value:"Kaliningrad Standard Time",abbr:"KST",offset:3,isdst:!1,text:"(+2:00) Kaliningrad",display:"+2:00",utc:["Europe/Kaliningrad"]},{value:"Arab Standard Time",abbr:"AST",offset:3,isdst:!1,text:"(+3:00) Kuwait, Riyadh",display:"+3:00",utc:["Asia/Aden","Asia/Bahrain","Asia/Kuwait","Asia/Qatar","Asia/Riyadh"]},{value:"E. Africa Standard Time",abbr:"EAST",offset:3,isdst:!1,text:"(+3:00) Nairobi",display:"+3:00",utc:["Africa/Addis_Ababa","Africa/Asmera","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Mogadishu","Africa/Nairobi","Antarctica/Syowa","Etc/GMT-3","Indian/Antananarivo","Indian/Comoro","Indian/Mayotte"]},{value:"Moscow Standard Time",abbr:"MSK",offset:3,isdst:!1,text:"(+3:00) Moscow, St. Petersburg, Volgograd, Minsk",display:"+3:00",utc:["Europe/Kirov","Europe/Moscow","Europe/Simferopol","Europe/Volgograd","Europe/Minsk"]},{value:"Samara Time",abbr:"SAMT",offset:4,isdst:!1,text:"(+4:00) Samara, Ulyanovsk, Saratov",display:"+4:00",utc:["Europe/Astrakhan","Europe/Samara","Europe/Ulyanovsk"]},{value:"Iran Standard Time",abbr:"IDT",offset:4.5,isdst:!0,text:"(+3:30) Tehran",display:"+3:30",utc:["Asia/Tehran"]},{value:"Arabian Standard Time",abbr:"AST",offset:4,isdst:!1,text:"(+4:00) Abu Dhabi, Muscat",display:"+4:00",utc:["Asia/Dubai","Asia/Muscat","Etc/GMT-4"]},{value:"Azerbaijan Standard Time",abbr:"ADT",offset:5,isdst:!0,text:"(+4:00) Baku",display:"+4:00",utc:["Asia/Baku"]},{value:"Mauritius Standard Time",abbr:"MST",offset:4,isdst:!1,text:"(+4:00) Port Louis",display:"+4:00",utc:["Indian/Mahe","Indian/Mauritius","Indian/Reunion"]},{value:"Georgian Standard Time",abbr:"GET",offset:4,isdst:!1,text:"(+4:00) Tbilisi",display:"+4:00",utc:["Asia/Tbilisi"]},{value:"Caucasus Standard Time",abbr:"CST",offset:4,isdst:!1,text:"(+4:00) Yerevan",display:"+4:00",utc:["Asia/Yerevan"]},{value:"Afghanistan Standard Time",abbr:"AST",offset:4.5,isdst:!1,text:"(+4:30) Kabul",display:"+4:30",utc:["Asia/Kabul"]},{value:"West Asia Standard Time",abbr:"WAST",offset:5,isdst:!1,text:"(+5:00) Ashgabat, Tashkent",display:"+5:00",utc:["Antarctica/Mawson","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Dushanbe","Asia/Oral","Asia/Samarkand","Asia/Tashkent","Etc/GMT-5","Indian/Kerguelen","Indian/Maldives"]},{value:"Yekaterinburg Time",abbr:"YEKT",offset:5,isdst:!1,text:"(+5:00) Yekaterinburg",display:"+5:00",utc:["Asia/Yekaterinburg"]},{value:"Pakistan Standard Time",abbr:"PKT",offset:5,isdst:!1,text:"(+5:00) Islamabad, Karachi",display:"+5:00",utc:["Asia/Karachi"]},{value:"India Standard Time",abbr:"IST",offset:5.5,isdst:!1,text:"(+5:30) Chennai, Kolkata, Mumbai, New Delhi",display:"+5:30",utc:["Asia/Kolkata","Asia/Calcutta"]},{value:"Sri Lanka Standard Time",abbr:"SLST",offset:5.5,isdst:!1,text:"(+5:30) Sri Jayawardenepura",display:"+5:30",utc:["Asia/Colombo"]},{value:"Nepal Standard Time",abbr:"NST",offset:5.75,isdst:!1,text:"(+5:45) Kathmandu",display:"+5:45",utc:["Asia/Kathmandu"]},{value:"Central Asia Standard Time",abbr:"CAST",offset:6,isdst:!1,text:"(+6:00) Nur-Sultan (Astana)",display:"+6:00",utc:["Antarctica/Vostok","Asia/Almaty","Asia/Bishkek","Asia/Qyzylorda","Asia/Urumqi","Etc/GMT-6","Indian/Chagos"]},{value:"Bangladesh Standard Time",abbr:"BST",offset:6,isdst:!1,text:"(+6:00) Dhaka",display:"+6:00",utc:["Asia/Dhaka","Asia/Thimphu"]},{value:"Myanmar Standard Time",abbr:"MST",offset:6.5,isdst:!1,text:"(+6:30) Yangon (Rangoon)",display:"+6:30",utc:["Asia/Rangoon","Indian/Cocos"]},{value:"SE Asia Standard Time",abbr:"SAST",offset:7,isdst:!1,text:"(+7:00) Bangkok, Hanoi, Jakarta",display:"+7:00",utc:["Antarctica/Davis","Asia/Bangkok","Asia/Hovd","Asia/Jakarta","Asia/Phnom_Penh","Asia/Pontianak","Asia/Saigon","Asia/Vientiane","Etc/GMT-7","Indian/Christmas"]},{value:"N. Central Asia Standard Time",abbr:"NCAST",offset:7,isdst:!1,text:"(+7:00) Novosibirsk",display:"+7:00",utc:["Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk"]},{value:"China Standard Time",abbr:"CST",offset:8,isdst:!1,text:"(+8:00) Beijing, Chongqing, Hong Kong, Urumqi",display:"+8:00",utc:["Asia/Hong_Kong","Asia/Macau","Asia/Shanghai"]},{value:"North Asia Standard Time",abbr:"NAST",offset:8,isdst:!1,text:"(+8:00) Krasnoyarsk",display:"+8:00",utc:["Asia/Krasnoyarsk"]},{value:"Singapore Standard Time",abbr:"MPST",offset:8,isdst:!1,text:"(+8:00) Kuala Lumpur, Singapore",display:"+8:00",utc:["Asia/Brunei","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Makassar","Asia/Manila","Asia/Singapore","Etc/GMT-8"]},{value:"W. Australia Standard Time",abbr:"WAST",offset:8,isdst:!1,text:"(+8:00) Perth",display:"+8:00",utc:["Antarctica/Casey","Australia/Perth"]},{value:"Taipei Standard Time",abbr:"TST",offset:8,isdst:!1,text:"(+8:00) Taipei",display:"+8:00",utc:["Asia/Taipei"]},{value:"Ulaanbaatar Standard Time",abbr:"UST",offset:8,isdst:!1,text:"(+8:00) Ulaanbaatar",display:"+8:00",utc:["Asia/Choibalsan","Asia/Ulaanbaatar"]},{value:"North Asia East Standard Time",abbr:"NAEST",offset:8,isdst:!1,text:"(+8:00) Irkutsk",display:"+8:00",utc:["Asia/Irkutsk"]},{value:"Japan Standard Time",abbr:"JST",offset:9,isdst:!1,text:"(+9:00) Osaka, Sapporo, Tokyo",display:"+9:00",utc:["Asia/Dili","Asia/Jayapura","Asia/Tokyo","Etc/GMT-9","Pacific/Palau"]},{value:"Korea Standard Time",abbr:"KST",offset:9,isdst:!1,text:"(+9:00) Seoul",display:"+9:00",utc:["Asia/Pyongyang","Asia/Seoul"]},{value:"Cen. Australia Standard Time",abbr:"CAST",offset:9.5,isdst:!1,text:"(+9:30) Adelaide",display:"+9:30",utc:["Australia/Adelaide","Australia/Broken_Hill"]},{value:"AUS Central Standard Time",abbr:"ACST",offset:9.5,isdst:!1,text:"(+9:30) Darwin",display:"+9:30",utc:["Australia/Darwin"]},{value:"E. Australia Standard Time",abbr:"EAST",offset:10,isdst:!1,text:"(+10:00) Brisbane",display:"+10:00",utc:["Australia/Brisbane","Australia/Lindeman"]},{value:"AUS Eastern Standard Time",abbr:"AEST",offset:10,isdst:!1,text:"(+10:00) Canberra, Melbourne, Sydney",display:"+10:00",utc:["Australia/Melbourne","Australia/Sydney"]},{value:"West Pacific Standard Time",abbr:"WPST",offset:10,isdst:!1,text:"(+10:00) Guam, Port Moresby",display:"+10:00",utc:["Antarctica/DumontDUrville","Etc/GMT-10","Pacific/Guam","Pacific/Port_Moresby","Pacific/Saipan","Pacific/Truk"]},{value:"Tasmania Standard Time",abbr:"TST",offset:10,isdst:!1,text:"(+10:00) Hobart",display:"+10:00",utc:["Australia/Currie","Australia/Hobart"]},{value:"Yakutsk Standard Time",abbr:"YST",offset:9,isdst:!1,text:"(+9:00) Yakutsk",display:"+9:00",utc:["Asia/Chita","Asia/Khandyga","Asia/Yakutsk"]},{value:"Central Pacific Standard Time",abbr:"CPST",offset:11,isdst:!1,text:"(+11:00) Solomon Is., New Caledonia",display:"+11:00",utc:["Antarctica/Macquarie","Etc/GMT-11","Pacific/Efate","Pacific/Guadalcanal","Pacific/Kosrae","Pacific/Noumea","Pacific/Ponape"]},{value:"Vladivostok Standard Time",abbr:"VST",offset:11,isdst:!1,text:"(+11:00) Vladivostok",display:"+11:00",utc:["Asia/Sakhalin","Asia/Ust-Nera","Asia/Vladivostok"]},{value:"New Zealand Standard Time",abbr:"NZST",offset:12,isdst:!1,text:"(+12:00) Auckland, Wellington",display:"+12:00",utc:["Antarctica/McMurdo","Pacific/Auckland"]},{value:"UTC+12",abbr:"U",offset:12,isdst:!1,text:"(+12:00) Coordinated Universal Time+12",display:"+12:00",utc:["Etc/GMT-12","Pacific/Funafuti","Pacific/Kwajalein","Pacific/Majuro","Pacific/Nauru","Pacific/Tarawa","Pacific/Wake","Pacific/Wallis"]},{value:"Fiji Standard Time",abbr:"FST",offset:12,isdst:!1,text:"(+12:00) Fiji",display:"+12:00",utc:["Pacific/Fiji"]},{value:"Magadan Standard Time",abbr:"MST",offset:12,isdst:!1,text:"(+12:00) Magadan",display:"+12:00",utc:["Asia/Anadyr","Asia/Kamchatka","Asia/Magadan","Asia/Srednekolymsk"]},{value:"Kamchatka Standard Time",abbr:"KDT",offset:13,isdst:!0,text:"(+12:00) Petropavlovsk-Kamchatsky - Old",display:"+12:00",utc:["Asia/Kamchatka"]},{value:"Tonga Standard Time",abbr:"TST",offset:13,isdst:!1,text:"(+13:00) Nuku'alofa",display:"+13:00",utc:["Etc/GMT-13","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Tongatapu"]},{value:"Samoa Standard Time",abbr:"SST",offset:13,isdst:!1,text:"(+13:00) Samoa",display:"+13:00",utc:["Pacific/Apia"]}];U.extend(oa);U.extend(na);U.extend(da);U.extend(fa);function Ta(l){const D=Number(l);if(!D||isNaN(D))throw ia(400,"Invalid timestamp");return D>1e11?D:D*1e3}function ha(){return U.tz.guess()}function pa(l,D=U.tz.guess()){return U.tz(l,D).format("h:mm A")}function ba(l,D=U.tz.guess()){return U.tz(l,D).format("dddd, Do MMMM YYYY")}function Sa(){return ma.flatMap(l=>l.utc.map(D=>({value:D,label:`${D} (${l.display})`})))}export{pa as a,ba as b,ha as c,Ta as d,Sa as g};