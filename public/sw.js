if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,s,a)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const n={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return c;case"module":return n;default:return e(i)}}))).then((e=>{const i=a(...e);return c.default||(c.default=i),c}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.png",revision:"5fce69847d9e0e33c98aea5237d4c6de"},{url:"/_next/static/BpCoqd5f5xN9zclONai8Z/_buildManifest.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/BpCoqd5f5xN9zclONai8Z/_ssgManifest.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1004.03b08f6232fbc9f1a0ee.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/11.2776bcf25f21114cd75f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1134.e542aa566467ba525254.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1270.dd01f398abd38eec2be2.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1605.01d0db84a5b623893cb7.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/178.3a8e4686bc7a45848f22.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1793.2c3b225833992743ae3f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/18.ad3476cedd05f5a2dc2e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1814.f565941efa839b47b511.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1855.ece51d0ed21f1ffa0fd3.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1898.5d02c5efb3a253c32f78.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1986.eb6b568e8e1c7fe106ca.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/1bfc9850-6b1457a6a98682923b24.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2040.06055db937c01baebbd6.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2178.03c7eb33f6e1edf62807.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2286.319cf3d71b53506115f4.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2354.419598a591566f427e71.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2404.134c0e7e1fa6c0097080.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2421.652803a4ff52924962d9.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2442.5f153f908f06d42a48ed.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2487.67403f088b4629cdd3e3.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2548.8da2484858c55c7b9e8b.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/255.28608f0e61a23a76adcd.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2580.224bd60a9977d3b56b60.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2586.9b87ece6c9b8707e40d1.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2707.1530733c009b5c91b945.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2716.0b73c054ca4f08dc2ded.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2825.c844de78f196010d2969.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2880.9252c24669b7ff9fb9e7.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/2931.ee827d114ae4fa966ed9.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/295.ee7d1e210ee874e448c3.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3028.8c9651e2a3ee860953ca.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3055.f80623b8b49812779b35.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3121.09be605684b365ea16a4.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3154.e8f241917d2e53133a65.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3225.edd022ab19a1cf881d77.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3301.60531e2656e2f423216f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3302.1638ef9377ddb072da8f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3310.94dcd6b89d048baf24ff.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3335.2897b38b09f0eafec728.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3375.dfc607800e0861393e73.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3448.940416b92dbffcbcd3bd.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/345.6427188a0bbf1e549319.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3452.6f44e2a6a574e8208155.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3462.508ab066ed01931a8f7f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3522.0a4521c15fc7878b159c.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3534.6930e6ae0f1b1cf60d82.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3598.6bde736934771a2051c9.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3611.8c0fb0583cab4ed0a7a6.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3663.0d2d479cbf9a02c8196e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3674.560cd24833a215b65b3d.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3683.b224c3e5abcbb30ed46e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3690.c51ac0376528a9a6bc76.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3758.f5de964880e5728dc40f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3764.3c8f85c3d910e2dabd68.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/379.940c0e63f040231b7ae7.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3850.53f95a72abfc97ce8a71.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3873.93f331299ac47bc2ca5e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3911.9b6cb60c119c577b2def.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3947.3060c0ab89dfa33ab83e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/395.8db2602766283a3f7d61.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/3997.9b46914c2af00f377566.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4.20ee50e0bfb8f9c7e4e9.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4008.b85044c91ef9974ac973.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4101.26b87749d92135eb435e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4155.b1f3a7bb5598184c7f78.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4175.adfcd0bfdec916839ff2.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/440.d1b26a8f26a4ad28f250.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/452.13542a8c7e87eea4efeb.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4522.e4234ac4d875f7c9e062.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4534.5adc80d0553988d02060.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4663.f4aa251d5630108399b1.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4667.1f9eb49029dc6f9c0dc0.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4682.3ff4b27e0c546f6b3caf.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4802.cf97c873e88a33f668d7.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/481.a9c754c4f01106665b5a.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4823.c5839de3d4a4ab8c4967.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4848.5824040d4d7462b427d7.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/4947.2469af028baa1c28c3bc.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/496.5a2e904dec35e7e9629f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5059.fd2696421e35b127ea64.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5205.fda7218ff547d7a809c7.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5236.4560de78f0fc0abc426d.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5257.a9d36792448371eb50bf.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5304.972fb4545d55935fe71e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5435.2d1089e0471b997c86ca.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/548.a9795373938aa261e804.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5511.f57738cde7f064d073d4.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5602.94f2baa596a4c0b7cd1e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5628.d588b8942229da338441.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5668-77dd387fc5ddb0f63f62.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5737.7ec3eeddd501ddaddc36.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/5962.fa49eabac6b2af69d378.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6277.365c5475000d1230583b.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6354.161b92f5bb4ed848b259.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6453.d1d1059fc272038be56f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6508.68483cbb9c6e448f53a9.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6586.da55d7272336ed9a0e6c.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6587.733ccbf9fb6e79375551.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6633.d53fbaafb5d98b569641.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/666.7b14b947181b545988ae.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6697.ade559f5d0c68523c3c5.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6759.ba16780d41bc89c287b2.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6763.38de77ea032db7e3813f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6830.7107d6b4551e2512a27d.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6855.ead4dd53d2eb32636ecc.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/689.fa79b6f03bb484fe40f8.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/6891.247abfc535c55ea60d91.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7044.cc688f8579493ad45a94.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/706.8e169a86e2d7dfaf78bc.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7060.e7284e76880af85a8512.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7107.8ff10472c48b7afc5dd2.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7290.4792fbc375236fbe6926.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7325-8f355bb46c4559865987.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7359.3b39333b7670ab89541c.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7402-531cbbe9df1efeccce8c.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/754.9b3cd9f2abbb97e4fd66.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/761.cd1d27ea49f186337fcf.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7628.bb41dfd5cc4075e20c8e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7642.0b42401ec4c2a9a06a23.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7666.3f83c40d25c981373aa3.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7730.cae17dc1260ce8ec92a0.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7965.acd0e3ff523a2277e9fc.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/7f0c75c1-e929de0fc4c14c020e4f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8002.6b043d1a7248a0b75ae0.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8028.3e02984fca8b96bf437a.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8068.1972de845f4a62c52cf5.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8153.ad2abf22258d0c902b4a.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8205.61e30066b4390c8f8888.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8374-1c09483ca901b82c690d.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8395.08ddb9bd72dbf49ba941.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8409.8b18be691c98a995d3de.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/845.f93baf2863bb16678f11.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8478.7d9d855413e6ff8d6086.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8500.841908efeb42910897a2.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8574.05de7bd5e3cc32240db3.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8606.c2022cafe7c0b39ad236.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8627.952cb4c9398a6a821eee.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8680.cfeb3c02b686e9dcd635.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8692.3034d90699dbf9096c59.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8694.8078ae3fb44a847efce7.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/87.768bdee1c033f5349e9f.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8734.cecd518d3554de6a6051.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8766.54404df4c331c0d0672d.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8800.669a940f7a70ff9c5c20.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/888.a8c4935e9a167e8f7d91.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/8927.590d64850a0c824c99e8.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9013.8ce4729aada4a0eb69f6.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9150.cc8bf3e22499a2249e46.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9154.fc0f16cf734df01320d2.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9216.da1a48285edd8f73e8ba.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9235.4238014a6c9df7cbf6a4.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/930.0606562f4fd164095e81.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9382.1e8e72d1dc3f392fc4eb.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9399.d1d6509944e7d2d8c0d5.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9408.5050bfbfdbcff52b2192.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9446.57cee727bccc96c165df.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9449.9796365d8e5cfa6ecc9b.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/95.aaed168a5e6edaf11ce1.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9506.f088470af07bcf3f3b27.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9627.60f664e88521277fdcd3.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9740.68a7255b7a5b33e2c57e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9754.cb414b782a67e2498921.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9769.6a6df6172a6fc195b855.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9771.a7e70f8f226ea8bbb965.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/981.43283e150f4d87f13f6e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9883.c982153917fbf453cd60.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/9934.2e04b44e653818475504.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/framework-64c50c9c66a92d1f3740.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/main-7545b597746cacf80e6e.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/%5Bpost%5D-4b6d8596520ae71614ee.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/404-1ffc909d925f2e54c817.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/_app-b509cc4165f859fbfe88.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/_error-f91c7b1b8e319781847a.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/history-dfe1e0b8958623e6e336.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/human-0db71efb53666a6d8dcd.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/index-de6f30bb99f76e7556fc.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/nature-bb3c6605a85146bf80c6.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/net-binnen/%5Bsubject%5D/%5Bid%5D-a3b3a54d5a9c1c388d69.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/over-sciencegeek-766b2786e935b7fbebfa.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/quirky-165143a356bc00b2b957.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/space-5686e9e57c897e137312.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/pages/tech-d5e4a304efbdfb825ac5.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/polyfills-4b807e79471bfa329e5d.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/chunks/webpack-16907398bc68e5b58923.js",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/_next/static/css/e6506f9efb306a3bfbcb.css",revision:"BpCoqd5f5xN9zclONai8Z"},{url:"/admin/config.yml",revision:"26740010245d1130c16e968e2997ff80"},{url:"/admin/index.html",revision:"62e734a80e99435241e5b7421e46fbf5"},{url:"/ico/sciencegeekLogo.ico",revision:"06f56378a470a8487f2e1592d3a51429"},{url:"/img/404.png",revision:"5fce69847d9e0e33c98aea5237d4c6de"},{url:"/img/aarde-meteoriet-ruimte.jpg",revision:"ab51fd0565f853b0b5abf0750bfd3cca"},{url:"/img/algen-heuvels-groen.jpg",revision:"bf950b1493f5ae3d6bacfc81b636eb4e"},{url:"/img/alien-rugzakje-landschap.jpg",revision:"631daeb1264ca93a793999443f5560d0"},{url:"/img/altaar-externsteine-circel.jpg",revision:"1bc036ae241f5436de3710c499b17231"},{url:"/img/anonymous-gda4ddd525_1920.jpg",revision:"d3ad57184ed97f3587e79e47aae4e9d5"},{url:"/img/batterijen-verzameling-divers.jpg",revision:"b0bcf235047cad87223159ce44cc4e1d"},{url:"/img/big-bang-verloop-sterren.jpg",revision:"8870b49484a19b9d6e817f08aba21cde"},{url:"/img/bliksemschichten-nacht-hemel.jpg",revision:"0721fe36be67c3e32c512acfbcd4e048"},{url:"/img/bloedvaten-hart-bloedcellen.jpg",revision:"7a7b44fcfe94486ec371ecf92fa166df"},{url:"/img/bol-explosie-rood-geel.jpg",revision:"a02f3fb3682df024186b23bf0c7b9bdd"},{url:"/img/bonobo-sociaal-partner.jpg",revision:"8bf29f7119f13fbb7810024989e9cbf3"},{url:"/img/bonobos-stel-gras.jpg",revision:"743965c009fcfbc8ca1484a4c8d74af2"},{url:"/img/boom-bladeren-groen.jpg",revision:"4ae44c66417c9306bcafb97ed514d26b"},{url:"/img/boomstammen-rivier-houthakkers.jpg",revision:"2c62a06fe553fac4b1000d080a5b1031"},{url:"/img/brand-brandweermannen-lussen.jpg",revision:"8cac67392f604bbb313189c01dfdb290"},{url:"/img/droogte-landschap-gele-bloem.jpg",revision:"b4a18521e748c24aa1d4d54b3b23a59c"},{url:"/img/drugsverslaafde-injectienaald-hoody.jpg",revision:"5429f5668e38f7a020f10848f1c1770d"},{url:"/img/externsteine-loopbrug-hoog.jpg",revision:"e675709cc0ef28234b5622f75d593b33"},{url:"/img/externsteine-zonsopgang-duitsland.jpg",revision:"555e424257a06c15b6c4aa39e8d19cda"},{url:"/img/fabriek-schoorstenen-rook.jpg",revision:"f466418f46f852f1ec59bd396fb08d08"},{url:"/img/flatgebouw-zonsondergang-paars.jpg",revision:"8c844ef802c55550a587318633ec85de"},{url:"/img/grot-water-blauw.jpeg",revision:"01ba0f1aa473a638c42cd55bd50e3312"},{url:"/img/hacker-g7d3624e67_1920.jpg",revision:"1cc3f07840745bdd93beca7128d5cca5"},{url:"/img/hand-bloed-wond.jpg",revision:"101e008a893b331e518f06035e083b3f"},{url:"/img/jongens-zonnebrillen-gamen.jpg",revision:"4d955934eeb5ee18c3fdf945808cad4e"},{url:"/img/kameleon-dichtbij-groen.jpg",revision:"e4ec5fcccc37b98fdb22ec28eb011c03"},{url:"/img/kind-park-herfst.jpg",revision:"91f6cf0972be4bc361f891a5d08e279e"},{url:"/img/kind-schermtijd-computer.jpg",revision:"e0d2c2d8213e8b83a1747ff3f2bc878b"},{url:"/img/kinderen-blij-computer.jpg",revision:"d1dcc249e90b6a1ab796c1135d0477ab"},{url:"/img/krater-arizona-meteorietinslag.jpg",revision:"a853417670e912a8a7e83649cb24324d"},{url:"/img/loadingImage.svg",revision:"6957442ea5a5e8334e1992dc44f68827"},{url:"/img/londen-tekening-big-ben.jpg",revision:"4ade834dc2a718cdf7e0c4358a8e7347"},{url:"/img/maan-zee-maanlicht.jpg",revision:"bd2653965edab030a2df7a28035727d4"},{url:"/img/man-kater-alcohol.jpg",revision:"90213d7034fa210e52754053888a8061"},{url:"/img/man-springend-gelukkig.jpg",revision:"a5a8cfaefb79c882b27af01c915d97a0"},{url:"/img/man-vraagteken-computer.jpg",revision:"e76e71aebb68d88323b7e83956a00c5c"},{url:"/img/man-zaadcel-eicel.jpg",revision:"84dbaf14c7ce731a314c4be9aeef8f06"},{url:"/img/mannetjesleeuw-landschap-leeuwenmanen.jpg",revision:"55224860f8b61b1b9c94e39183ec400e"},{url:"/img/mayamaskers-beschildering-felle-kleuren.jpeg",revision:"ad56a52ffe2e199f52ace7ab4a95fe6c"},{url:"/img/meisje-gitaar-vrolijk.jpg",revision:"5f2064c0aba847485232253bd9bed565"},{url:"/img/melkweg-draaien-sterrenstelsel.jpg",revision:"fcd3d7affb1a099e79b14f68f547ac0c"},{url:"/img/muurrelief-el-palmar-ruïne.jpeg",revision:"37adb1fd15e03180deef58d20367b171"},{url:"/img/nacht-sterrenhemel-boom.jpg",revision:"3d27143cef7e15a8a9ab6a19a34348cc"},{url:"/img/nacht-sterrenhemel-bos.jpg",revision:"36327408f1b76428d671b13a55c7da7c"},{url:"/img/neuronen-verbinding-hersencellen.jpg",revision:"dcc465fe8bb8b602232fbdca8a254442"},{url:"/img/ouder-paar-dansen-tango.jpg",revision:"e1ea3deae5a380b2a3892fda72a4d0b3"},{url:"/img/pestmeester-masker-acteur.jpg",revision:"6b3f933b20527ab5a4dbec431b9c4d36"},{url:"/img/pestmeester-tekening-pestmasker.png",revision:"2f53c810d1bac1fa2b806d1ad9927f3d"},{url:"/img/photo1.jpg",revision:"ea42e0a3c578d1fbeb15c8754657b1b4"},{url:"/img/photo2.jpg",revision:"8898027c75171f596f7da635a9c10013"},{url:"/img/photo3.jpg",revision:"91d4052cf3f771a32454b708a21e8670"},{url:"/img/photo4.jpg",revision:"015b794fd41e04c50fbb250877eb18b1"},{url:"/img/photo5.jpg",revision:"2ca29d99f61dbd3ff08a3e926f990018"},{url:"/img/photo6.jpg",revision:"5fe1a07b48e1ee301cdff6ee8c64beab"},{url:"/img/photo7.jpg",revision:"c27593de61957338ff93c5f89493f32d"},{url:"/img/photo8.jpg",revision:"c27593de61957338ff93c5f89493f32d"},{url:"/img/planeten-verbinding-lichtstraal.jpg",revision:"2e3ca79fd89ac6d250ca9833dce7ef18"},{url:"/img/plastic-flesjes-blauw.jpg",revision:"fa024a5868c26a0a68654e4370fa28f8"},{url:"/img/regenwoud-bomen-zonlicht.jpg",revision:"1c8efffc4a0c460abfe07741cf7a5bd2"},{url:"/img/ruimte-horizon-meteorieten.jpg",revision:"c2b5b29407ad3d6255a1b503ab1476cf"},{url:"/img/ruiter-boogschutter-paardrijkunst.png",revision:"8c44ac985f4c2ce28757ee9a27bf7a19"},{url:"/img/schedel-sabeltandtijger-uitgestorven.jpg",revision:"9a0a534dcac51afcf44f1ac66146ccef"},{url:"/img/schermafbeelding-2019-10-28-om-23.27.51.png",revision:"e14af34d4e87dc4917dca5af386bfb44"},{url:"/img/schilderij-samuel-johnson.jpg",revision:"f944883681e7ed32198d7c34a4cbdee3"},{url:"/img/skelet-schedel-dood.jpg",revision:"0fb94d77419c009c01607accc9e6abc6"},{url:"/img/snoek-onderwater-rivier.jpg",revision:"8b12ce08e4c76ca3e7d8a6f6798ad16a"},{url:"/img/soldaat-vuurwapen-gevecht.jpg",revision:"d0e693b5e9b89c91b2823302ab8c6b3c"},{url:"/img/spanje-aquaduct-romeinen.jpg",revision:"c1f5954f27f9af0827bd89f9d4bb4b3b"},{url:"/img/speurneus-vergrootglas-vingerafdruk.png",revision:"696020a3c904f5c366a3bb0d09f7d6a5"},{url:"/img/spiraal-sterrenstelsel-ruimte.jpg",revision:"36473854a5b7c7c0190a88e05f2240ac"},{url:"/img/star-wars-actiepoppen-laserzwaard.jpg",revision:"1fa78037f85c06f3c38eb458116bb187"},{url:"/img/sterrenhemel-nacht-donker.jpg",revision:"f8140af0196301c6179dfc89e97c74e7"},{url:"/img/sterrenstelsel-nevel-ruimte.jpg",revision:"68735ecc1a2260c9222a52aacc3bf9df"},{url:"/img/strijder-zonsondergang-harnas.jpg",revision:"4020cccbfa826116751c563ee0035455"},{url:"/img/strijder-zonsondergang-harnas.png",revision:"8c44ac985f4c2ce28757ee9a27bf7a19"},{url:"/img/students-1807505_1280.webp",revision:"763c07cf2d8c1621f63ad9b28fd71fca"},{url:"/img/terrassen-nacht-druk.jpg",revision:"800aa23f69872bbc7f1d97bcac5eda7c"},{url:"/img/tsunami-kustlijn-overspoeld.jpg",revision:"56ecc04b04534832aba4228abfd612f9"},{url:"/img/tsunami-verwoesting-huizen.jpg",revision:"1805fe7f3a49b02db1aefe529165d6e1"},{url:"/img/turkije-aquaduct-byzanthium.jpg",revision:"90e027c7930fbd3590f34f68727b31bb"},{url:"/img/typemachine-papier-fake-news.jpeg",revision:"7bca2e0b00cd2bac2159bdc38ab4471d"},{url:"/img/vader-baby-slaap.jpg",revision:"99d274416e8371f7aa89f88810eccd64"},{url:"/img/vliegtuig-zonsondergang-oranje.jpg",revision:"35c8bc1838a94f2d07e062d70e814807"},{url:"/img/vrouw-afrekenen-verkoopbon.jpg",revision:"b994e1ca0ae8d4ba95996ace3c77d172"},{url:"/img/vrouw-bed-computer.jpg",revision:"7579a9780f6cc936591e3216f024f24d"},{url:"/img/vrouw-hologram-stad.jpg",revision:"1eada027cd57b4e3ee5caf9e6a2b8fe9"},{url:"/img/wandeling-park-herfst.jpg",revision:"7c75b90727ca5037d3ce4737b47a462a"},{url:"/img/wesp-bloem-paars.jpg",revision:"c48f4dfa42b26af0db37945cf354257e"},{url:"/img/wesp-tak-dichtbij.jpg",revision:"5d1cc8f4db365a1191480908c3ed19bf"},{url:"/img/wolven-intiem-stel.jpg",revision:"020ba412641b4838f7b990561c8b1730"},{url:"/img/zanger-gitaar-microfoon.jpg",revision:"bfe7ac4c5d29e917e01846e5f53500aa"},{url:"/img/zombi-vrouw-eng.jpg",revision:"f89e0eb0cad5ee701c3dee441b20a9bb"},{url:"/img/zon-zonnevlam-zonnestorm.jpg",revision:"a2f9edc505f229c3e6799f94c6027b5d"},{url:"/robots.txt",revision:"12181a092012103b4416626a9e68edc3"},{url:"/sciencegeeklogo.png",revision:"30db56eab57564cb99efa93099aede05"},{url:"/sitemap-generator.js",revision:"1eae7b62a25ad4027d3cfe35601a9a17"},{url:"/sitemap.xml",revision:"e1cfe1cf59c3132e5aac44827a3fde07"},{url:"/variables.ts",revision:"aa1507fe519026b406397f043940563d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
