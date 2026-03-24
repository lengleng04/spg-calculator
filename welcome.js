(function(){
  var style=document.createElement('style');
  style.textContent=
  '#welcome-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px}'+
  '#welcome-box{background:#fff;border-radius:20px;padding:28px 24px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto;position:relative;box-shadow:0 20px 60px rgba(0,0,0,.3);font-family:Inter,system-ui,sans-serif}'+
  'body.dark #welcome-box{background:#141c28}'+
  '#welcome-box h2{font-size:1.1rem;font-weight:700;text-align:center;margin-bottom:20px;color:#1d1d1f}'+
  'body.dark #welcome-box h2{color:#e0e6ed}'+
  '#welcome-box .sec{margin-bottom:16px}'+
  '#welcome-box .sec-title{font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#86868b;margin-bottom:8px}'+
  'body.dark #welcome-box .sec-title{color:#6b7d93}'+
  '#welcome-box .author{font-size:.8rem;line-height:1.8;color:#1d1d1f}'+
  'body.dark #welcome-box .author{color:#e0e6ed}'+
  '#welcome-box .author .heart{color:#ff3b30}'+
  '#welcome-box .copy-btn{display:inline-block;background:#007aff;color:#fff;border:none;border-radius:6px;padding:2px 10px;font-size:.65rem;font-weight:600;cursor:pointer;margin-left:6px;transition:all .15s;font-family:Inter,system-ui,sans-serif}'+
  '#welcome-box .copy-btn:hover{opacity:.85}'+
  '#welcome-box .copy-btn:active{transform:scale(.95)}'+
  '#welcome-box .copy-btn.done{background:#34c759}'+
  '#welcome-box .manual{font-size:.75rem;line-height:1.8;color:#1d1d1f}'+
  'body.dark #welcome-box .manual{color:#e0e6ed}'+
  '#welcome-box .manual li{margin-bottom:4px}'+
  '#welcome-box .manual .placeholder{color:#86868b;font-style:italic}'+
  'body.dark #welcome-box .manual .placeholder{color:#6b7d93}'+
  '#welcome-box .close-btn{display:block;width:100%;margin-top:20px;background:#f5f5f7;border:none;border-radius:12px;padding:12px;font-size:.85rem;font-weight:600;color:#1d1d1f;cursor:pointer;transition:all .15s;font-family:Inter,system-ui,sans-serif}'+
  'body.dark #welcome-box .close-btn{background:#0a0e14;color:#e0e6ed}'+
  '#welcome-box .close-btn:hover{opacity:.85}'+
  '#welcome-box .close-btn:active{transform:scale(.98)}';
  document.head.appendChild(style);

  var overlay=document.createElement('div');
  overlay.id='welcome-overlay';
  overlay.innerHTML=
  '<div id="welcome-box">'+
    '<h2>Hell Let Loose SPG/火炮密位计算器</h2>'+
    '<div class="sec">'+
      '<div class="sec-title"><span class="heart">❤️</span> 关于作者</div>'+
      '<div class="author">'+
        'SLK|Sanyon<br>'+
        '本人收小队队员<br>'+
        'QQ 1691109688 '+
        '<button class="copy-btn" id="copyQQ" onclick="copyQQ()">点击复制</button>'+
      '</div>'+
    '</div>'+
    '<div class="sec">'+
      '<div class="sec-title">📖 操作手册</div>'+
      '<ul class="manual">'+
        '<li><b>SPG：</b>输入距离和夹角，自动算出低弹道/高弹道密位</li>'+
        '<li><b>固定火炮：</b><span class="placeholder">即将更新，敬请期待</span></li>'+
        '<li>可以直接编辑密位，反推距离</li>'+
        '<li>偏移值用于计算打远/打近的密位，方便微调落点</li>'+
      '</ul>'+
    '</div>'+
    '<button class="close-btn" id="welcomeClose">开始使用</button>'+
  '</div>';

  document.body.appendChild(overlay);

  document.getElementById('welcomeClose').addEventListener('click',function(){
    overlay.remove();
  });

  overlay.addEventListener('click',function(e){
    if(e.target===overlay){overlay.remove()}
  });

  window.copyQQ=function(){
    navigator.clipboard.writeText('1691109688').then(function(){
      var btn=document.getElementById('copyQQ');
      btn.textContent='已复制';
      btn.classList.add('done');
      setTimeout(function(){btn.textContent='点击复制';btn.classList.remove('done')},1500);
    });
  };
})();
