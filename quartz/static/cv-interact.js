/**
 * 互动 CV 核心逻辑 - 独立脚本版
 */
(function() {
    console.log("互动脚本已成功加载，跳过编译转义");

    function initSidebar() {
        // 使用事件代理，确保页面切换后依然有效
        document.body.addEventListener('click', function(e) {
            const el = e.target.closest('.cv-term');
            if (!el) return;

            e.preventDefault();
            const sidebar = document.getElementById('cv-sidebar');
            const sideTitle = document.getElementById('side-title');
            const sideContent = document.getElementById('side-content');
            const note = el.getAttribute('data-note') || "";

            if (sideTitle) sideTitle.innerText = el.innerText;
            
            if (sideContent) {
                if (note.startsWith('http')) {
                    sideContent.innerHTML = `<a href="${note}" target="_blank" style="color:#014da1; font-weight:bold;">${note}</a>`;
                } else {
                    sideContent.innerText = note;
                }
            }
            
            if (sidebar) sidebar.classList.add('active');
        });

        // 双击跳转
        document.body.addEventListener('dblclick', function(e) {
            const el = e.target.closest('.cv-term');
            if (el) {
                const note = el.getAttribute('data-note');
                if (note && note.startsWith('http')) {
                    window.open(note, '_blank');
                }
            }
        });
    }

    // 适配 Quartz 的导航事件
    document.addEventListener("nav", initSidebar);
    
    // 初始执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }
})();