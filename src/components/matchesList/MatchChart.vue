<template>
    <div id="container" style="height:270px">
        <!-- <vue-highcharts type="chart" :options="chartOptions" :redrawOnUpdate="true" :oneToOneUpdate="false"
            :animateOnUpdate="true" @rendered="onRender" /> -->
        <div class="chart" id="chart1" style="height:270px"></div>
    </div>
</template>


<script>
import { ref, computed } from "vue";
import VueHighcharts from "vue3-highcharts";

export default {
    mounted() {   

        const data = {"id":979320,"db_id":6980324435,"winner":4061,"match_data":{"teams":{"t1":{"id":36,"score":12,"win":0,"players":{"93817671":{"team":16,"side":"radiant","id":39380,"nick":"Malady","hero_id":86,"hero_title":"Rubick","k":2,"d":7,"a":9,"l":49,"dn":2,"lvl":14,"gpm":250,"xpm":288,"n":7402,"items":[{"id":188,"title":"Smoke of Deceit"},{"id":102,"title":"Force Staff"},{"id":218,"title":"Observer and Sentry Wards"},{"id":180,"title":"Arcane Boots"},{"id":36,"title":"Magic Wand"},{"id":1076,"title":"Specialist's Array"}],"dmg":17696,"tdmg":0,"heal":864},"152455523":{"team":16,"side":"radiant","id":18028,"nick":"V-Tune","hero_id":4,"hero_title":"Bloodseeker","k":7,"d":4,"a":4,"l":390,"dn":28,"lvl":23,"gpm":661,"xpm":755,"n":25387,"items":[{"id":156,"title":"Satanic"},{"id":50,"title":"Phase Boots"},{"id":116,"title":"Black King Bar"},{"id":147,"title":"Manta Style"},{"id":143,"title":"Skull Basher"},{"id":158,"title":"Mjollnir"},{"id":309,"title":"Mind Breaker"}],"dmg":41036,"tdmg":0,"heal":0},"294135421":{"team":16,"side":"radiant","id":18193,"nick":"Nicky Cool","hero_id":50,"hero_title":"Dazzle","k":0,"d":6,"a":10,"l":242,"dn":5,"lvl":19,"gpm":466,"xpm":506,"n":17843,"items":[{"id":231,"title":"Guardian Greaves"},{"id":244,"title":"Wind Lace"},{"id":36,"title":"Magic Wand"},{"id":226,"title":"Lotus Orb"},{"id":108,"title":"Aghanim's Scepter"},{"id":41,"title":"Bottle"},{"id":676,"title":"Ceremonial Robe"}],"dmg":15978,"tdmg":0,"heal":14075},"175311897":{"team":16,"side":"radiant","id":64352,"nick":"swedenstrong","hero_id":32,"hero_title":"Riki","k":1,"d":3,"a":17,"l":19,"dn":6,"lvl":14,"gpm":198,"xpm":284,"n":6545,"items":[{"id":36,"title":"Magic Wand"},{"id":180,"title":"Arcane Boots"},{"id":102,"title":"Force Staff"},{"id":43,"title":"Sentry Ward"},{"id":57,"title":"Void Stone"},{"id":188,"title":"Smoke of Deceit"},{"id":331,"title":"Vambrace"}],"dmg":7233,"tdmg":0,"heal":186},"117514269":{"team":16,"side":"radiant","id":45930,"nick":"laise","hero_id":92,"hero_title":"Visage","k":2,"d":6,"a":7,"l":171,"dn":12,"lvl":17,"gpm":371,"xpm":408,"n":14288,"items":[{"id":112,"title":"Assault Cuirass"},{"id":908,"title":"Wraith Pact"},{"id":240,"title":"Blight Stone"},{"id":185,"title":"Drum of Endurance"},{"id":36,"title":"Magic Wand"},{"id":214,"title":"Tranquil Boots"},{"id":358,"title":"Dragon Scale"}],"dmg":14224,"tdmg":827,"heal":3007}},"bans":[{"id":53,"title":"Nature's Prophet"},{"id":61,"title":"Broodmother"},{"id":65,"title":"Batrider"},{"id":77,"title":"Lycan"},{"id":105,"title":"Techies"},{"id":97,"title":"Magnus"},{"id":69,"title":"Doom"}],"picks":[{"id":32,"title":"Riki"},{"id":92,"title":"Visage"},{"id":86,"title":"Rubick"},{"id":4,"title":"Bloodseeker"},{"id":50,"title":"Dazzle"}],"tid":16,"title":"Natus Vincere"},"t2":{"id":7422789,"score":26,"win":1,"players":{"134556694":{"team":4061,"side":"dire","id":322,"nick":"Solo","hero_id":83,"hero_title":"Treant Protector","k":0,"d":5,"a":18,"l":53,"dn":6,"lvl":17,"gpm":291,"xpm":405,"n":7173,"items":[{"id":180,"title":"Arcane Boots"},{"id":36,"title":"Magic Wand"},{"id":218,"title":"Observer and Sentry Wards"},{"id":9,"title":"Platemail"},{"id":102,"title":"Force Staff"},{"id":676,"title":"Ceremonial Robe"}],"dmg":11533,"tdmg":805,"heal":9337},"858106446":{"team":4061,"side":"dire","id":50863,"nick":"Kiyotaka","hero_id":106,"hero_title":"Ember Spirit","k":16,"d":1,"a":7,"l":343,"dn":2,"lvl":24,"gpm":689,"xpm":824,"n":28863,"items":[{"id":235,"title":"Octarine Core"},{"id":1466,"title":"Gleipnir"},{"id":116,"title":"Black King Bar"},{"id":119,"title":"Shiva's Guard"},{"id":48,"title":"Boots of Travel"},{"id":311,"title":"Spell Prism"}],"dmg":45011,"tdmg":2597,"heal":0},"161839895":{"team":4061,"side":"dire","id":73788,"nick":"Antares","hero_id":58,"hero_title":"Enchantress","k":1,"d":0,"a":18,"l":206,"dn":2,"lvl":20,"gpm":450,"xpm":555,"n":18415,"items":[{"id":931,"title":"Boots of Bearing"},{"id":263,"title":"Hurricane Pike"},{"id":908,"title":"Wraith Pact"},{"id":75,"title":"Wraith Band"},{"id":33,"title":"Cheese"},{"id":63,"title":"Power Treads"},{"id":949,"title":"Ogre Seal Totem"}],"dmg":14790,"tdmg":6211,"heal":4216},"165564598":{"team":4061,"side":"dire","id":78495,"nick":"MieRo","hero_id":100,"hero_title":"Tusk","k":2,"d":4,"a":16,"l":123,"dn":10,"lvl":19,"gpm":342,"xpm":500,"n":12616,"items":[{"id":242,"title":"Crimson Guard"},{"id":231,"title":"Guardian Greaves"},{"id":11,"title":"Quelling Blade"},{"id":40,"title":"Dust of Appearance"},{"id":36,"title":"Magic Wand"},{"id":574,"title":"Cloak of Flames"}],"dmg":15572,"tdmg":683,"heal":8685},"177411785":{"team":4061,"side":"dire","id":17554,"nick":"Daxak","hero_id":89,"hero_title":"Naga Siren","k":7,"d":2,"a":12,"l":526,"dn":24,"lvl":23,"gpm":836,"xpm":731,"n":29904,"items":[{"id":117,"title":"Aegis of the Immortal"},{"id":116,"title":"Black King Bar"},{"id":114,"title":"Heart of Tarrasque"},{"id":139,"title":"Butterfly"},{"id":147,"title":"Manta Style"},{"id":98,"title":"Orchid Malevolence"},{"id":571,"title":"Trickster Cloak"}],"dmg":23277,"tdmg":7447,"heal":0}},"bans":[{"id":75,"title":"Silencer"},{"id":38,"title":"Beastmaster"},{"id":98,"title":"Timbersaw"},{"id":137,"title":"Primal Beast"},{"id":6,"title":"Drow Ranger"},{"id":22,"title":"Zeus"},{"id":43,"title":"Death Prophet"}],"picks":[{"id":100,"title":"Tusk"},{"id":89,"title":"Naga Siren"},{"id":83,"title":"Treant Protector"},{"id":58,"title":"Enchantress"},{"id":106,"title":"Ember Spirit"}],"tid":4061,"title":"HellRaisers"}},"duration":2404,"gold":{"2404":-25506,"0":2,"60":-187,"120":-161,"180":-6,"240":-562,"300":-291,"360":-550,"420":-634,"480":-1678,"540":-2703,"600":-3708,"660":-5488,"720":-5537,"780":-6404,"840":-7269,"900":-8557,"960":-10524,"1020":-10306,"1080":-11516,"1140":-11431,"1200":-11384,"1260":-11268,"1320":-11531,"1380":-11870,"1440":-12549,"1500":-13533,"1560":-14828,"1620":-15393,"1680":-16559,"1740":-17009,"1800":-19359,"1860":-21988,"1920":-24316,"1980":-20071,"2040":-19506,"2100":-20020,"2160":-20354,"2220":-21925,"2280":-22554,"2340":-21763,"2400":-26578},"ts":{"radiant":{"tower_state":1542,"barracks_state":3},"dire":{"tower_state":2046,"barracks_state":63}},"events":{"0":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":50,"t":7}],"g1":382,"g2":722,"d1":930,"d2":979}],"360":[{"s":"t1","i":"3","h":[{"s":"t1","t1":86,"t2":106,"t":392}],"g1":619,"g2":548,"d1":2348,"d2":1588}],"480":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":32,"t":468}],"g1":443,"g2":965,"d1":1586,"d2":2124}],"540":[{"s":"t2","i":"3","h":[{"s":"t2","t1":58,"t2":50,"t":528},{"s":"t2","t1":89,"t2":92,"t":532}],"g1":164,"g2":928,"d1":1709,"d2":2656},{"b":["Tier 1 Middle Tower"],"i":"2","s":"t2"}],"600":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":86,"t":641}],"g1":609,"g2":1551,"d1":199,"d2":880},{"b":["Tier 1 Bottom Tower"],"i":"2","s":"t2"}],"660":[{"s":"t1","i":"3","h":[{"s":"t1","t1":86,"t2":100,"t":698}],"g1":712,"g2":375,"d1":2595,"d2":3301}],"720":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":86,"t":761},{"s":"t2","t1":89,"t2":32,"t":776}],"g1":418,"g2":1457,"d1":318,"d2":1749}],"780":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":86,"t":761},{"s":"t2","t1":89,"t2":32,"t":776}],"g1":228,"g2":1583,"d1":188,"d2":1064}],"840":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":92,"t":848}],"g1":521,"g2":1177,"d1":1650,"d2":833},{"b":["Tier 2 Bottom Tower"],"i":"2","s":"t2"}],"900":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":4,"t":944}],"g1":476,"g2":1826,"d1":275,"d2":1922},{"b":["Tier 1 Top Tower"],"i":"2","s":"t2"}],"1020":[{"a":{"c":"t2","h":"Ember Spirit","s":106},"i":1,"r":{"s":"t2","t1":0,"t2":0}}],"1080":[{"b":["Tier 2 Middle Tower"],"i":"2","s":"t2"}],"1140":[{"s":"t2","i":"3","h":[{"s":"t2","t1":89,"t2":92,"t":1180}],"g1":716,"g2":1345,"d1":1170,"d2":1417}],"1260":[{"s":"t1","i":"3","h":[{"s":"t1","t1":92,"t2":83,"t":1258},{"s":"t1","t1":4,"t2":100,"t":1259}],"g1":1082,"g2":-7,"d1":6954,"d2":4214}],"1740":[{"s":"t2","i":"3","h":[{"s":"t1","t1":4,"t2":83,"t":1711},{"s":"t1","t1":4,"t2":100,"t":1712},{"s":"t2","t1":106,"t2":50,"t":1712},{"s":"t2","t1":89,"t2":92,"t":1714},{"s":"t2","t1":106,"t2":86,"t":1726}],"g1":1316,"g2":2164,"d1":9500,"d2":10058},{"a":{"c":"t2","h":"Ember Spirit","s":106},"i":1,"r":{"s":"t2","t1":0,"t2":0}}],"1800":[{"s":"t2","i":"3","h":[{"s":"t2","t1":89,"t2":4,"t":1792}],"g1":-74,"g2":1458,"d1":4306,"d2":3571},{"b":["Tier 3 Bottom Tower","Tier 3 Middle Tower","npc_dota_goodguys_melee_rax_mid"],"i":"2","s":"t2"}],"1860":[{"b":["npc_dota_goodguys_range_rax_bot"],"i":"2","s":"t2"}],"1920":[{"s":"t1","i":"3","h":[{"s":"t1","t1":4,"t2":89,"t":1942},{"s":"t1","t1":32,"t2":83,"t":1946}],"g1":3028,"g2":-321,"d1":8513,"d2":4929}],"1980":[{"b":["Tier 1 Top Tower"],"i":"2","s":"t1"}],"2040":[{"s":"t2","i":"3","h":[{"s":"t2","t1":89,"t2":86,"t":2059},{"s":"t2","t1":100,"t2":50,"t":2061},{"s":"t1","t1":4,"t2":89,"t":2069},{"s":"t1","t1":4,"t2":83,"t":2075},{"s":"t2","t1":106,"t2":4,"t":2077}],"g1":1365,"g2":1887,"d1":13275,"d2":9640}],"2220":[{"s":"t1","i":"3","h":[{"s":"t1","t1":4,"t2":83,"t":2246},{"s":"t2","t1":89,"t2":86,"t":2254},{"s":"t1","t1":92,"t2":100,"t":2261}],"g1":2016,"g2":1743,"d1":15072,"d2":9262}],"2340":[{"a":{"c":"t2","h":"Naga Siren","s":89},"i":1,"r":{"s":"t2","t1":0,"t2":0}}]},"is_parser":"5"}}

        match_chart(1, data)

        function convert_val(val) {
            var z = (val < 0 ? '-' : '');
            val = Math.abs(val);
            if (val >= 1000) {
                val = val / 1000;
                return z + (Math.round(val * 10) / 10) + 'k';
            } else {
                return z + val;
            }
        }
        function match_chart(num, data) {
            
            var swidth = $('#chart' + num).width();
            var width = swidth - 49;
            var sheight = 0;
            var path1 = [];
            var path2 = [];
            var clip2 = [];
            var path4 = [];
            var path3 = [];
            var color = { 't1': '#92A525', 't2': '#C23C2A', 't0': '#BABDCE' };
            var e = [];
            var min = -5000;
            var max = 5000;
            var x_min = null;
            var x_max = 0;
            var km = 0;
            var g, i, x, y;
            var h1, h2, h3, h4 = '';
            for (i in data.gold) {
                if (i > data.duration) {
                    break;
                }
                g = data.gold[i];
                if (g < min) {
                    min = g;
                } else if (g > max) {
                    max = g;
                }
                x_max = i;
                if (x_min === null) {
                    x_min = (Math.floor(i / 60)) * 60;
                }
            }
            if (x_max < 300) {
                x_max = 300;
            }
            if (x_min === null) {
                x_min = 0;
            }
            var x_len = x_max - x_min;
            var sum = Math.abs(min) + max;
            var ys = Math.ceil((sum / 5) / 1000) * 1000;
            max = ys * (Math.ceil(max / ys));
            min = ys * (Math.floor(min / ys));
            sum = Math.abs(min) + max;
            var ykol = Math.ceil(sum / ys);
            sheight = 114 + (ykol + 1) * 30;
            var height = sheight - 90;
            var k1 = height / sum;
            var k2 = width / x_len;
            var z = max * k1;
            var lwidth = x_len * k2 + 49;
            var lheight = ykol * ys * k1 + 15.5;
            var ymin = min - ys;
            for (i = ymin; i <= max; i += ys) {
                y = Math.round((i < 0 ? Math.abs(i) * k1 + z : z - i * k1)) + 5.5;
                if (i >= min) {
                    h2 += '<text x="28" y="' + (y + 3) + '" style="color:#525252;font-size:11px;fill:#525252;width:199px;text-overflow:clip;" text-anchor="end" opacity="1">' + (i / 1000) + 'k</text>';
                } else {
                    ymin = y;
                }
                h4 += '<path fill="none" d="M 39 ' + y + ' L ' + lwidth + ' ' + y + '" stroke="#E9E9E9" stroke-width="1" opacity="1"></path>';
            }
            var s = Math.ceil((x_len / 15) / 60) * 60;
            for (i = x_min; i < x_max; i += s) {
                x = (i - x_min) * k2 + 39;
                h1 += '<text x="' + (x > swidth - 20 ? swidth - 20 : x) + '" y="' + (lheight + 15) + '" style="color:#525252;font-size:11px;fill:#525252;" text-anchor="middle" opacity="1">' + (i / 60) + ':00</text>';
                h3 += '<path fill="none" d="M ' + x + ' 6 L ' + x + ' ' + lheight + '" stroke="#E9E9E9" stroke-width="1" opacity="1"></path>';
            }
            for (i in data.gold) {
                g = data.gold[i];
                x = Math.round((i - x_min) * k2);
                y = Math.round((g < 0 ? Math.abs(g) * k1 + z : z - g * k1));
                if (!path1.length) {
                    path1.push('M 0 ' + y);
                    path2.push('M 0 ' + y);
                    clip2.push('M 0 ' + y);
                }
                path1.push('L ' + x + ' ' + y);
                path2.push('L ' + x + ' ' + y);
                clip2.push('L ' + x + ' ' + y);
            }
            path2.push('L ' + x + ' ' + z);
            path2.push('L 0 ' + z);
            clip2.push('L ' + x + ' ' + max);
            clip2.push('L 0 ' + max);
            if (data.events != undefined) {
                for (i in data.events) {
                    e = [];
                    var k = 0;
                    for (j in data.events[i]) {
                        g = data.events[i][j];
                        x = (i - x_min) * k2 + 39;
                        if (g.i == '3') {
                            var r = 2;
                            path3.push('<path stroke-dasharray="3" fill="none" d="M ' + x + ' ' + ymin + ' L ' + x + ' ' + min + '" stroke="' + color.t0 + '" stroke-width="1" opacity="1"></path>');
                            e.push('<b><i>' + convert_val(g.g1) + '</i><s></s><i>' + convert_val(g.g2) + '</i></b>' + (g.d1 > 0 || g.d2 > 0 ? '<u><i>' + convert_val(g.d1) + '</i><s></s><i>' + convert_val(g.d2) + '</i></u>' : ''));
                            for (var c in g.h) {
                                var th1 = '';
                                var th2 = '';
                                var d = '';
                                if (g.h[c].t < 0) {
                                    d = '-';
                                    g.h[c].t = Math.abs(g.h[c].t);
                                }
                                var h = Math.floor(g.h[c].t / 3600);
                                var m = Math.floor((g.h[c].t - h * 3600) / 60);
                                var s = g.h[c].t - h * 3600 - m * 60;
                                g.h[c].t = d + (h ? h + ':' : '') + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
                                if (Array.isArray(g.h[c].t1)) {
                                    for (q in g.h[c].t1) {
                                        th1 += '<img src=/media/game/hero/582/_59/' + g.h[c].t1[q] + '.png>';
                                    }
                                } else {
                                    th1 = '<img src=/media/game/hero/582/_59/' + g.h[c].t1 + '.png>';
                                }
                                if (Array.isArray(g.h[c].t2)) {
                                    for (q in g.h[c].t2) {
                                        th2 += '<img src=/media/game/hero/582/_59/' + g.h[c].t2[q] + '.png>';
                                        r += 1;
                                    }
                                } else {
                                    th2 = '<img src=/media/game/hero/582/_59/' + g.h[c].t2 + '.png>';
                                    r += 1;
                                }
                                e.push('<div class=ttside' + (g.h[c].s == 't1' ? 'green' : 'red') + '><span>' + th1 + '</span><div><s></s><i>' + g.h[c].t + '</i></div><span>' + th2 + '</span></div>');
                            }
                            if (r > 8) {
                                r = 8;
                            }
                            k += r + 4;
                            path4.push('<circle cx="' + x + '" cy="' + ymin + '" r="' + r + '" fill="' + color[g.s] + '" />');
                        } else if (g.i == '1') {
                            y = (k == 0 ? ymin - 10 : ymin) + k;
                            path4.push('<image x="' + (x - 10) + '" y="' + y + '" width="20" height="20" href="/media/game/icon/582/roshan.png"></image>');
                            path3.push('<path stroke-dasharray="3" fill="none" d="M ' + x + ' ' + ymin + ' L ' + x + ' ' + min + '" stroke="' + color.t0 + '" stroke-width="1" opacity="1"></path>');
                            if (g.r) {
                                e.push('<div class=ttside' + (g.r.s == 't1' ? 'green' : (g.r.s == 't2' ? 'red' : 'gray')) + '><em><img src=/media/game/icon/582/roshan.png> ' + (g.r.s != 't0' ? '<b>' + data.teams[g.r.s].title + '</b> убили Рошана' : 'Рошан был убит') + '</em></div>');
                            }
                            if (g.a) {
                                e.push('<div class=ttside' + (g.r.s == 't1' ? 'green' : 'red') + '><em><img src=/media/game/icon/582/aegis.png> <b>' + g.a.h + '</b> подбирает Аегис</em></div>');
                            }
                            k += (k > 0 ? 24 : 14);
                        } else if (g.i == '2') {
                            var r = 4 + g.b.length * 2;
                            if (r > 16) {
                                r = 16;
                            }
                            y = (k == 0 ? ymin - r / 2 : ymin) + k;
                            path4.push('<rect x="' + (x - r / 2) + '" y="' + y + '" width="' + r + '" height="' + r + '" fill="' + color[g.s] + '"></rect>');
                            path3.push('<path stroke-dasharray="3" fill="none" d="M ' + x + ' ' + ymin + ' L ' + x + ' ' + min + '" stroke="' + color.t0 + '" stroke-width="1" opacity="1"></path>');
                            k += r + 4;
                            for (var c in g.b) {
                                e.push('<div class=ttside' + (g.s == 't1' ? 'green' : 'red') + '><em>' + g.b[c] + '</em></div>');
                            }
                        }
                    }
                    path4.push('<rect x="' + (x - 10) + '" y="' + (ymin - 10) + '" width="20" height="' + (k + 20) + '" fill="transparent" class="tt" title="<div class=ttgraph>' + e.join('') + '</div>"></rect>');
                    if (k > km) {
                        km = k;
                    }
                }
                if (km > 1) {
                    sheight = sheight + km - 20;
                }
            }
            var html = '<svg version="1.1" style="font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="' + swidth + '" height="' + sheight + '">';
            html += '<desc>Created by escorenews.com</desc><defs>';
            html += '<clipPath id="highcharts-' + num + '-1"><rect x="0" y="0" width="' + swidth + '" height="' + sheight + '"></rect></clipPath>';
            html += '<clipPath id="highcharts-' + num + '-2" transform="translate(39,6) scale(1 1)"><path d="' + clip2.join(' ') + '"></clipPath>';
            html += '<clipPath id="highcharts-' + num + '-4"><rect x="0" y="' + z + '" width="' + width + '" height="' + (Math.abs(min * k1)) + '"></rect></clipPath>';
            html += '<clipPath id="highcharts-' + num + '-5"><rect x="0" y="0" width="' + width + '" height="' + (max * k1) + '"></rect></clipPath></defs>';
            html += '<rect x="0" y="0" width="' + swidth + '" height="' + sheight + '" strokeWidth="0" fill="transparent"></rect>';
            html += '<g>' + h3 + '</g><g>' + h4 + '</g><g>' + h1 + '</g><g>' + h2 + '</g>';
            html += '<g clip-path="url(#highcharts-' + num + '-2)">' + path3.join('') + '</g>';
            html += '<g>' + path4.join('') + '</g>';
            html += '<g><g class="highcharts-series" visibility="visible" zIndex="0.1" transform="translate(39,6) scale(1 1)" clip-path="url(#highcharts-' + num + '-1)"><path fill="rgba(194,60,42,0.4)" d="' + path2.join(' ') + '" zIndex="0" clip-path="url(#highcharts-' + num + '-4)"></path><path fill="rgba(146,165,37,0.4)" d="' + path2.join(' ') + '" zIndex="0" clip-path="url(#highcharts-' + num + '-5)"></path><path fill="none" d="' + path1.join(' ') + '" stroke="#C23C2A" stroke-width="3" zIndex="1" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#highcharts-' + num + '-4)"></path><path fill="none" d="' + path1.join(' ') + '" stroke="#92A525" stroke-width="3" zIndex="1" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#highcharts-' + num + '-5)"></path></g></g>';
            html += '</svg>';
            
            $('#chart' + num).html(html);
        }


    },  
    updated() {
        const data = {"id":979320,"db_id":6980324435,"winner":4061,"match_data":{"teams":{"t1":{"id":36,"score":12,"win":0,"players":{"93817671":{"team":16,"side":"radiant","id":39380,"nick":"Malady","hero_id":86,"hero_title":"Rubick","k":2,"d":7,"a":9,"l":49,"dn":2,"lvl":14,"gpm":250,"xpm":288,"n":7402,"items":[{"id":188,"title":"Smoke of Deceit"},{"id":102,"title":"Force Staff"},{"id":218,"title":"Observer and Sentry Wards"},{"id":180,"title":"Arcane Boots"},{"id":36,"title":"Magic Wand"},{"id":1076,"title":"Specialist's Array"}],"dmg":17696,"tdmg":0,"heal":864},"152455523":{"team":16,"side":"radiant","id":18028,"nick":"V-Tune","hero_id":4,"hero_title":"Bloodseeker","k":7,"d":4,"a":4,"l":390,"dn":28,"lvl":23,"gpm":661,"xpm":755,"n":25387,"items":[{"id":156,"title":"Satanic"},{"id":50,"title":"Phase Boots"},{"id":116,"title":"Black King Bar"},{"id":147,"title":"Manta Style"},{"id":143,"title":"Skull Basher"},{"id":158,"title":"Mjollnir"},{"id":309,"title":"Mind Breaker"}],"dmg":41036,"tdmg":0,"heal":0},"294135421":{"team":16,"side":"radiant","id":18193,"nick":"Nicky Cool","hero_id":50,"hero_title":"Dazzle","k":0,"d":6,"a":10,"l":242,"dn":5,"lvl":19,"gpm":466,"xpm":506,"n":17843,"items":[{"id":231,"title":"Guardian Greaves"},{"id":244,"title":"Wind Lace"},{"id":36,"title":"Magic Wand"},{"id":226,"title":"Lotus Orb"},{"id":108,"title":"Aghanim's Scepter"},{"id":41,"title":"Bottle"},{"id":676,"title":"Ceremonial Robe"}],"dmg":15978,"tdmg":0,"heal":14075},"175311897":{"team":16,"side":"radiant","id":64352,"nick":"swedenstrong","hero_id":32,"hero_title":"Riki","k":1,"d":3,"a":17,"l":19,"dn":6,"lvl":14,"gpm":198,"xpm":284,"n":6545,"items":[{"id":36,"title":"Magic Wand"},{"id":180,"title":"Arcane Boots"},{"id":102,"title":"Force Staff"},{"id":43,"title":"Sentry Ward"},{"id":57,"title":"Void Stone"},{"id":188,"title":"Smoke of Deceit"},{"id":331,"title":"Vambrace"}],"dmg":7233,"tdmg":0,"heal":186},"117514269":{"team":16,"side":"radiant","id":45930,"nick":"laise","hero_id":92,"hero_title":"Visage","k":2,"d":6,"a":7,"l":171,"dn":12,"lvl":17,"gpm":371,"xpm":408,"n":14288,"items":[{"id":112,"title":"Assault Cuirass"},{"id":908,"title":"Wraith Pact"},{"id":240,"title":"Blight Stone"},{"id":185,"title":"Drum of Endurance"},{"id":36,"title":"Magic Wand"},{"id":214,"title":"Tranquil Boots"},{"id":358,"title":"Dragon Scale"}],"dmg":14224,"tdmg":827,"heal":3007}},"bans":[{"id":53,"title":"Nature's Prophet"},{"id":61,"title":"Broodmother"},{"id":65,"title":"Batrider"},{"id":77,"title":"Lycan"},{"id":105,"title":"Techies"},{"id":97,"title":"Magnus"},{"id":69,"title":"Doom"}],"picks":[{"id":32,"title":"Riki"},{"id":92,"title":"Visage"},{"id":86,"title":"Rubick"},{"id":4,"title":"Bloodseeker"},{"id":50,"title":"Dazzle"}],"tid":16,"title":"Natus Vincere"},"t2":{"id":7422789,"score":26,"win":1,"players":{"134556694":{"team":4061,"side":"dire","id":322,"nick":"Solo","hero_id":83,"hero_title":"Treant Protector","k":0,"d":5,"a":18,"l":53,"dn":6,"lvl":17,"gpm":291,"xpm":405,"n":7173,"items":[{"id":180,"title":"Arcane Boots"},{"id":36,"title":"Magic Wand"},{"id":218,"title":"Observer and Sentry Wards"},{"id":9,"title":"Platemail"},{"id":102,"title":"Force Staff"},{"id":676,"title":"Ceremonial Robe"}],"dmg":11533,"tdmg":805,"heal":9337},"858106446":{"team":4061,"side":"dire","id":50863,"nick":"Kiyotaka","hero_id":106,"hero_title":"Ember Spirit","k":16,"d":1,"a":7,"l":343,"dn":2,"lvl":24,"gpm":689,"xpm":824,"n":28863,"items":[{"id":235,"title":"Octarine Core"},{"id":1466,"title":"Gleipnir"},{"id":116,"title":"Black King Bar"},{"id":119,"title":"Shiva's Guard"},{"id":48,"title":"Boots of Travel"},{"id":311,"title":"Spell Prism"}],"dmg":45011,"tdmg":2597,"heal":0},"161839895":{"team":4061,"side":"dire","id":73788,"nick":"Antares","hero_id":58,"hero_title":"Enchantress","k":1,"d":0,"a":18,"l":206,"dn":2,"lvl":20,"gpm":450,"xpm":555,"n":18415,"items":[{"id":931,"title":"Boots of Bearing"},{"id":263,"title":"Hurricane Pike"},{"id":908,"title":"Wraith Pact"},{"id":75,"title":"Wraith Band"},{"id":33,"title":"Cheese"},{"id":63,"title":"Power Treads"},{"id":949,"title":"Ogre Seal Totem"}],"dmg":14790,"tdmg":6211,"heal":4216},"165564598":{"team":4061,"side":"dire","id":78495,"nick":"MieRo","hero_id":100,"hero_title":"Tusk","k":2,"d":4,"a":16,"l":123,"dn":10,"lvl":19,"gpm":342,"xpm":500,"n":12616,"items":[{"id":242,"title":"Crimson Guard"},{"id":231,"title":"Guardian Greaves"},{"id":11,"title":"Quelling Blade"},{"id":40,"title":"Dust of Appearance"},{"id":36,"title":"Magic Wand"},{"id":574,"title":"Cloak of Flames"}],"dmg":15572,"tdmg":683,"heal":8685},"177411785":{"team":4061,"side":"dire","id":17554,"nick":"Daxak","hero_id":89,"hero_title":"Naga Siren","k":7,"d":2,"a":12,"l":526,"dn":24,"lvl":23,"gpm":836,"xpm":731,"n":29904,"items":[{"id":117,"title":"Aegis of the Immortal"},{"id":116,"title":"Black King Bar"},{"id":114,"title":"Heart of Tarrasque"},{"id":139,"title":"Butterfly"},{"id":147,"title":"Manta Style"},{"id":98,"title":"Orchid Malevolence"},{"id":571,"title":"Trickster Cloak"}],"dmg":23277,"tdmg":7447,"heal":0}},"bans":[{"id":75,"title":"Silencer"},{"id":38,"title":"Beastmaster"},{"id":98,"title":"Timbersaw"},{"id":137,"title":"Primal Beast"},{"id":6,"title":"Drow Ranger"},{"id":22,"title":"Zeus"},{"id":43,"title":"Death Prophet"}],"picks":[{"id":100,"title":"Tusk"},{"id":89,"title":"Naga Siren"},{"id":83,"title":"Treant Protector"},{"id":58,"title":"Enchantress"},{"id":106,"title":"Ember Spirit"}],"tid":4061,"title":"HellRaisers"}},"duration":2404,"gold":{"2404":-25506,"0":2,"60":-187,"120":-161,"180":-6,"240":-562,"300":-291,"360":-550,"420":-634,"480":-1678,"540":-2703,"600":-3708,"660":-5488,"720":-5537,"780":-6404,"840":-7269,"900":-8557,"960":-10524,"1020":-10306,"1080":-11516,"1140":-11431,"1200":-11384,"1260":-11268,"1320":-11531,"1380":-11870,"1440":-12549,"1500":-13533,"1560":-14828,"1620":-15393,"1680":-16559,"1740":-17009,"1800":-19359,"1860":-21988,"1920":-24316,"1980":-20071,"2040":-19506,"2100":-20020,"2160":-20354,"2220":-21925,"2280":-22554,"2340":-21763,"2400":-26578},"ts":{"radiant":{"tower_state":1542,"barracks_state":3},"dire":{"tower_state":2046,"barracks_state":63}},"events":{"0":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":50,"t":7}],"g1":382,"g2":722,"d1":930,"d2":979}],"360":[{"s":"t1","i":"3","h":[{"s":"t1","t1":86,"t2":106,"t":392}],"g1":619,"g2":548,"d1":2348,"d2":1588}],"480":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":32,"t":468}],"g1":443,"g2":965,"d1":1586,"d2":2124}],"540":[{"s":"t2","i":"3","h":[{"s":"t2","t1":58,"t2":50,"t":528},{"s":"t2","t1":89,"t2":92,"t":532}],"g1":164,"g2":928,"d1":1709,"d2":2656},{"b":["Tier 1 Middle Tower"],"i":"2","s":"t2"}],"600":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":86,"t":641}],"g1":609,"g2":1551,"d1":199,"d2":880},{"b":["Tier 1 Bottom Tower"],"i":"2","s":"t2"}],"660":[{"s":"t1","i":"3","h":[{"s":"t1","t1":86,"t2":100,"t":698}],"g1":712,"g2":375,"d1":2595,"d2":3301}],"720":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":86,"t":761},{"s":"t2","t1":89,"t2":32,"t":776}],"g1":418,"g2":1457,"d1":318,"d2":1749}],"780":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":86,"t":761},{"s":"t2","t1":89,"t2":32,"t":776}],"g1":228,"g2":1583,"d1":188,"d2":1064}],"840":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":92,"t":848}],"g1":521,"g2":1177,"d1":1650,"d2":833},{"b":["Tier 2 Bottom Tower"],"i":"2","s":"t2"}],"900":[{"s":"t2","i":"3","h":[{"s":"t2","t1":106,"t2":4,"t":944}],"g1":476,"g2":1826,"d1":275,"d2":1922},{"b":["Tier 1 Top Tower"],"i":"2","s":"t2"}],"1020":[{"a":{"c":"t2","h":"Ember Spirit","s":106},"i":1,"r":{"s":"t2","t1":0,"t2":0}}],"1080":[{"b":["Tier 2 Middle Tower"],"i":"2","s":"t2"}],"1140":[{"s":"t2","i":"3","h":[{"s":"t2","t1":89,"t2":92,"t":1180}],"g1":716,"g2":1345,"d1":1170,"d2":1417}],"1260":[{"s":"t1","i":"3","h":[{"s":"t1","t1":92,"t2":83,"t":1258},{"s":"t1","t1":4,"t2":100,"t":1259}],"g1":1082,"g2":-7,"d1":6954,"d2":4214}],"1740":[{"s":"t2","i":"3","h":[{"s":"t1","t1":4,"t2":83,"t":1711},{"s":"t1","t1":4,"t2":100,"t":1712},{"s":"t2","t1":106,"t2":50,"t":1712},{"s":"t2","t1":89,"t2":92,"t":1714},{"s":"t2","t1":106,"t2":86,"t":1726}],"g1":1316,"g2":2164,"d1":9500,"d2":10058},{"a":{"c":"t2","h":"Ember Spirit","s":106},"i":1,"r":{"s":"t2","t1":0,"t2":0}}],"1800":[{"s":"t2","i":"3","h":[{"s":"t2","t1":89,"t2":4,"t":1792}],"g1":-74,"g2":1458,"d1":4306,"d2":3571},{"b":["Tier 3 Bottom Tower","Tier 3 Middle Tower","npc_dota_goodguys_melee_rax_mid"],"i":"2","s":"t2"}],"1860":[{"b":["npc_dota_goodguys_range_rax_bot"],"i":"2","s":"t2"}],"1920":[{"s":"t1","i":"3","h":[{"s":"t1","t1":4,"t2":89,"t":1942},{"s":"t1","t1":32,"t2":83,"t":1946}],"g1":3028,"g2":-321,"d1":8513,"d2":4929}],"1980":[{"b":["Tier 1 Top Tower"],"i":"2","s":"t1"}],"2040":[{"s":"t2","i":"3","h":[{"s":"t2","t1":89,"t2":86,"t":2059},{"s":"t2","t1":100,"t2":50,"t":2061},{"s":"t1","t1":4,"t2":89,"t":2069},{"s":"t1","t1":4,"t2":83,"t":2075},{"s":"t2","t1":106,"t2":4,"t":2077}],"g1":1365,"g2":1887,"d1":13275,"d2":9640}],"2220":[{"s":"t1","i":"3","h":[{"s":"t1","t1":4,"t2":83,"t":2246},{"s":"t2","t1":89,"t2":86,"t":2254},{"s":"t1","t1":92,"t2":100,"t":2261}],"g1":2016,"g2":1743,"d1":15072,"d2":9262}],"2340":[{"a":{"c":"t2","h":"Naga Siren","s":89},"i":1,"r":{"s":"t2","t1":0,"t2":0}}]},"is_parser":"5"}}

        match_chart(1, data)
    },


    
};

</script>