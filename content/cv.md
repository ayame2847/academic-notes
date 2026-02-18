---
title: "Curriculum Vitae (academic ver.)"
---

# Xiangyi Tang

<p align="center">
  12232847@mail.sustech.edu.cn <br>
  No. 1088 Xueyuan Avenue, Shenzhen, 518055, P.R. China
</p>

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
* Teaching A-level & Further Math, IEPQ, and TMUA.

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
    * Designed posters & created WeChat push content
    * Video editing & Podcast operation
---

<div id="cv-sidebar">
    <button class="close-btn" onclick="document.getElementById('cv-sidebar').classList.remove('active')">×</button>
    <h3 id="side-title" style="color:#e62310; border-bottom: 2px solid #1a1a1a; padding-bottom: 5px;">详情</h3>
    <div id="side-content" style="margin-top: 15px; font-size: 0.95rem; line-height: 1.6;"></div>
</div>

<style>
/* 蒙德里安风格虚线下划线 */
.cv-term {
    text-decoration: underline dashed #014da1;
    text-underline-offset: 4px;
    cursor: pointer;
    transition: 0.2s;
}
.cv-term:hover { color: #014da1; background: rgba(1, 77, 161, 0.05); }

/* 侧边栏样式 */
#cv-sidebar {
    position: fixed; right: -350px; top: 0; width: 350px; height: 100vh;
    background: #fff; border-left: 5px solid #1a1a1a;
    padding: 30px; transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1001; box-shadow: -10px 0 30px rgba(0,0,0,0.1);
}
#cv-sidebar.active { right: 0; }
.close-btn { background:none; border:none; font-size: 20px; cursor:pointer; float:right; }
</style>

<script>
document.addEventListener('nav', () => {
    document.querySelectorAll('.cv-term').forEach(el => {
        const note = el.getAttribute('data-note');
        
        // 单击：侧边栏
        el.addEventListener('click', (e) => {
            const sidebar = document.getElementById('cv-sidebar');
            document.getElementById('side-title').innerText = el.innerText;
            document.getElementById('side-content').innerHTML = note.startsWith('http') ? 
                `访问课程主页: <a href="${note}" target="_blank">${note}</a>` : note;
            sidebar.classList.add('active');
        });

        // 双击：链接跳转
        el.addEventListener('dblclick', () => {
            if (note.startsWith('http')) window.open(note, '_blank');
        });
    });
});
</script>