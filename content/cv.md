---
title: ✨ Curriculum Vitae
date: 2026-02-18
tags:
  - CV
  - Academic
  - Skills
  - Experience
---

# Xiangyi Tang

<div style="text-align: left;">
  12232847@mail.sustech.edu.cn <br>
  No. 1088 Xueyuan Avenue, Shenzhen, 518055, P.R. China
</div>

## Research Interests
* Group theory
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
* Teaching A-level Math, Further Math, IEPQ and TMUA.

**Assistant to Prof. Efim Zelmanov, SUSTech** _2024 – 2025_
* Cuspidal modules over superconformal algebras
* Cyclic homology of Jordan superalgebras and related Lie superalgebras

**Teaching Assistant at Department of Mathematics, SUSTech** _2022 – 2024_
* Courses: *Linear Algebra, Abstract Algebra,* <span class="cv-term" data-note="https://ayame2847.github.io/MA235/">Applied Abstract Algebra (24Spring)</span>

## Extracurricular Activities
* **First Place** in All A-Level Subject Teaching Competition on Coursemo _2025_
* **Highest Linpack Winner** of the 1st SUSTech Cluster Competition _2023_
* **Academic Leader** of Data Science Course, X Academy _2022_
* **Organization Committee Member**, Third Party Branch of Zhicheng College _2021_
* **Head of Public Relations**, Student Union of Zhicheng College _2019 – 2020_

## Additional Information
* **Languages:** English (TOEFL: 100), Japanese (N3), German (A2)
* **Computer Skills:** $\LaTeX$, Python, Quickly learning new techniques with AI
* **Creative Experiences:** 
    * Created aesthetic education games (using Unity)
    * Designed posters
    * Created WeChat push content
    * Edited videos
    * Operated podcast (NanO studio)
---

<div id="cv-sidebar">
    <button class="close-btn" onclick="document.getElementById('cv-sidebar').classList.remove('active')">关闭</button>
    <h3 id="side-title">详情</h3>
    <div id="side-content"></div>
</div>

<script>
document.addEventListener('nav', function() {
    var terms = document.querySelectorAll('.cv-term');
    var sidebar = document.getElementById('cv-sidebar');
    var title = document.getElementById('side-title');
    var content = document.getElementById('side-content');

    terms.forEach(function(term) {
        // 单击事件：呼出侧边栏
        term.onclick = function(e) {
            e.preventDefault();
            var note = this.getAttribute('data-note') || '';
            title.innerText = this.innerText;
            content.innerHTML = '';
            
            if (note.indexOf('http') === 0) {
                var link = document.createElement('a');
                link.href = note;
                link.target = '_blank';
                link.innerText = note;
                link.style.color = '#014da1';
                link.style.fontWeight = 'bold';
                link.style.textDecoration = 'underline';
                content.appendChild(link);
            } else {
                content.innerText = note;
            }
            sidebar.classList.add('active');
        };

    });
});
</script>