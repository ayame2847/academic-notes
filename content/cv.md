---
title: "Xiangyi Tang - Curriculum Vitae"
---

# Xiangyi Tang

<p align="center">
  <i class="fa fa-phone"></i> +86 133-2733-5921 &nbsp;&nbsp; 
  <i class="fa fa-envelope"></i> 12232847@mail.sustech.edu.cn
</p>

## Research Interests
* Algebraic Combinatorics
* Mathematics Education
* AI for Science

## Work Experience

**Full-time Mathematics Teacher at Coursemo Education, Shenzhen** _Jul. 2024 – Nov. 2025_
* [cite_start]Teaching A-level mathematics, further mathematics, IEPQ, and TMUA courses. 

**Assistant to Prof. Efim Zelmanov, SUSTech** _Mar. 2024 – Jul. 2025_
* [cite_start]Cuspidal modules over superconformal algebras. 

**Teaching Assistant in the Department of Mathematics, SUSTech** _Sept. [cite_start]2022 – Jul. 2024_ 
* [cite_start]Taught in tutorial classes, answered questions, and graded exams. 
* [cite_start]Courses: *Linear Algebra, Advanced Linear Algebra, Abstract Algebra,* <span class="cv-term" data-note="https://ayame2847.github.io/MA235/">Applied Abstract Algebra (24Spring)</span>

## Extracurricular Activities

**First Place in All A-Level Subject Teaching Competition on Coursemo** _Aug. 2025_

**Highest Linpack Winner of the 1st SUSTech Cluster Competition** _Feb. 2023_

**Academic leader of Data Science Course, X Academy, Shenzhen** _Summer 2022_

**Head of the Public Relations Department of the Student Union of Zhicheng College** _2019 – 2020_


## Additional Information

* **Languages:** English (TOEFL: 100), Japanese (N3), German (A2)
* **Computer Skills:** $\LaTeX$, Python, <span class="cv-term" data-note="擅长利用 LLMs 辅助编写代码、优化算法及快速掌握新工具。">Capable of quickly learning new techniques with AI</span>
* **Creative & Tech Experiences:** * Created games (using Unity)
    * Designed posters & created WeChat push content
    * Video editing & Podcast operation

<div id="cv-sidebar">
    <h3 id="side-title" style="color:#e62310">详情</h3>
    <div id="side-content" style="word-break: break-all; margin-top: 15px;"></div>
    <br>
    <button onclick="document.getElementById('cv-sidebar').classList.remove('active')">关闭</button>
</div>

<script>
document.addEventListener('nav', () => {
    document.querySelectorAll('.cv-term').forEach(el => {
        const note = el.getAttribute('data-note');

        // 1. 单击：弹出侧边栏显示链接或注释
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const sidebar = document.getElementById('cv-sidebar');
            document.getElementById('side-title').innerText = el.innerText;
            document.getElementById('side-content').innerHTML = `资源链接: <a href="${note}" target="_blank">${note}</a>`;
            sidebar.classList.add('active');
        });

        // 2. 双击：直接跳转
        el.addEventListener('dblclick', () => {
            if (note.startsWith('http')) {
                window.open(note, '_blank');
            }
        });
    });
});
</script>