---
title: "Curriculum Vitae (academic ver.)"
---

# Xiangyi Tang

<div style="text-align: left;">
  12232847@mail.sustech.edu.cn <br>
  No. 1088 Xueyuan Avenue, Shenzhen, 518055, P.R. China
</div>

## Research Interests
* Algebraic Combinatorics
* Mathematics Education
* AI for Science

## Work Experience

**Full-time Mathematics Teacher at Coursemo Education, Shenzhen** _Jul. 2024 – Nov. 2025_
* Teaching A-level mathematics, further mathematics, IEPQ, and TMUA courses. 

**Assistant to Prof. Efim Zelmanov, SUSTech** _Mar. 2024 – Jul. 2025_
* Cuspidal modules over superconformal algebras. 

**Teaching Assistant in the Department of Mathematics, SUSTech** _Sept. 2022 – Jul. 2024_ 
* Taught in tutorial classes, answered questions, and graded exams. 
* Courses: *Linear Algebra, Advanced Linear Algebra, Abstract Algebra,* <span class="cv-term" data-note="https://ayame2847.github.io/MA235/">Applied Abstract Algebra (24Spring)</span>

## Extracurricular Activities

**First Place in All A-Level Subject Teaching Competition on Coursemo** _Aug. 2025_

**Highest Linpack Winner of the 1st SUSTech Cluster Competition** _Feb. 2023_

**Academic leader of Data Science Course, X Academy, Shenzhen** _Summer 2022_

**Head of the Public Relations Department of the Student Union of Zhicheng College** _2019 – 2020_


## Additional Information

* **Languages:** English (TOEFL: 100), Japanese (N3), German (A2)
* **Computer Skills:** $\LaTeX$, Python, <span class="cv-term" data-note="擅长利用 LLMs 辅助编写代码、优化算法及快速掌握新工具。">Capable of quickly learning new techniques with AI</span>
* **Creative & Tech Experiences:** 
    * Created games (using Unity)
    * Designed posters & created WeChat push content
    * Video editing & Podcast operation

<div id="cv-sidebar">
    <button class="close-btn" onclick="document.getElementById('cv-sidebar').classList.remove('active')">关闭</button>
    <h3 id="side-title">详情</h3>
    <div id="side-content"></div>
</div>

<script>
(function() {
    // 事件委托：把点击事件挂在 body 上，解决 Quartz 页面切换失效问题
    document.body.addEventListener('click', function(e) {
        const target = e.target.closest('.cv-term');
        if (!target) return;

        e.preventDefault();
        const sidebar = document.getElementById('cv-sidebar');
        const note = target.getAttribute('data-note') || "";
        
        document.getElementById('side-title').innerText = target.innerText;
        
        // 处理链接逻辑
        if (note.indexOf('http') === 0) {
            document.getElementById('side-content').innerHTML = '<a href="' + note + '" target="_blank">' + note + '</a>';
        } else {
            document.getElementById('side-content').innerText = note;
        }
        
        sidebar.classList.add('active');
    });

    // 双击直接跳转逻辑
    document.body.addEventListener('dblclick', function(e) {
        const target = e.target.closest('.cv-term');
        if (target) {
            const note = target.getAttribute('data-note');
            if (note && note.indexOf('http') === 0) {
                window.open(note, '_blank');
            }
        }
    });
})();
</script>