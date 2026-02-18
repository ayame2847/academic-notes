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

## Educational Background
**Southern University of Science and Technology (SUSTech)** _2022 – 2024_
* Master of Science in Mathematics | Supervisor: Prof. Qing Xiang
* Thesis: *Is the (133,33,8)-difference set really sporadic?*

**Southern University of Science and Technology (SUSTech)** _2018 – 2022_
* Bachelor of Science in Mathematics | Supervisor: Prof. Caiheng Li
* Thesis: *The maximal subgroups of the three-dimensional finite unitary groups*

## Work Experience
**Full-time Mathematics Teacher at Coursemo Education** _2024 – 2025_
* Teaching A-level Math, Further Math, IEPQ, and TMUA.

**Assistant to Prof. Efim Zelmanov, SUSTech** _2024 – 2025_
* Research on superconformal algebras and Jordan superalgebras.

**Teaching Assistant at Department of Mathematics, SUSTech** _2022 – 2024_
* Courses: *Linear Algebra, Abstract Algebra,* <span class="cv-term" data-note="https://ayame2847.github.io/MA235/">Applied Abstract Algebra (24Spring)</span>

## Extracurricular Activities
* **First Place** in All A-Level Subject Teaching Competition on Coursemo _2025_
* **Highest Linpack Winner** of the 1st SUSTech Cluster Competition _2023_
* **Academic Leader** of Data Science Course, X Academy _2022_
* **Head of Public Relations**, Student Union of Zhicheng College _2019 – 2020_

## Additional Information
* **Languages:** English (TOEFL: 100), Japanese (N3), German (A2)
* **Computer Skills:** $\LaTeX$, Python, Quickly learning new techniques with AI
* **Creative & Tech Experiences:** 
    * Created games (using Unity)
    * Designed posters
    * Created WeChat push content
    * Video editing 
    * Podcast operation
---

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
    const sidebar = document.getElementById('cv-sidebar');
    const title = document.getElementById('side-title');
    const content = document.getElementById('side-content');
    
    title.innerText = el.innerText;
    
    sidebar.classList.add('active');
    e.stopPropagation();
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