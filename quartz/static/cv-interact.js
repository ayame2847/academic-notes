(function() {
    console.log("Interactive CV script loaded successfully.");

    function initCV() {
        document.body.addEventListener('click', function(e) {
            var el = e.target.closest('.cv-term');
            if (!el) return;

            e.preventDefault();
            var sidebar = document.getElementById('cv-sidebar');
            var note = el.getAttribute('data-note') || "No details available";
            
            document.getElementById('side-title').innerText = el.innerText;
            
            if (note.indexOf('http') === 0) {
                document.getElementById('side-content').innerHTML = '<a href="' + note + '" target="_blank" style="color:#014da1; font-weight:bold;">' + note + '</a>';
            } else {
                document.getElementById('side-content').innerText = note;
            }
            
            if (sidebar) sidebar.classList.add('active');
        });
    }

    document.addEventListener("nav", initCV);
    initCV(); // 确保初次加载也运行
})();