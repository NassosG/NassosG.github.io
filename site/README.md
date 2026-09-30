# limur.ai

Personal site of Nassos Galiopoulos, built with [Astro](https://astro.build). Less is more.

## Post a paper

1. In `src/content/publications/`, copy `_template.md` to a new file such as
   `my-paper-2026.md`. The file name becomes the page address: `limur.ai/research/my-paper-2026/`.
2. Fill in the fields at the top, set `draft: false`, then write the abstract or a summary below them.
3. Optional: put the PDF in `public/papers/` and set `pdf: '/papers/my-paper-2026.pdf'`.
4. Commit. The site rebuilds itself.

You can do all of this in the browser on GitHub: open the folder, choose **Add file → Create new
file**, paste the template, and commit.

## Post a thought

Same steps in `src/content/thoughts/`, using that folder's `_template.md` (remember `draft: false`). The Thoughts menu
item appears once the first post is published. Set `draft: true` to keep a post hidden.

## Edit everything else

| What | Where |
|---|---|
| Name, role, email, links, key questions | `src/data/site.ts` |
| Experience, education, boards, certifications | `src/data/experience.ts` |
| Speaker bio, topics, talks | `src/data/speaking.ts` |
| Page text | `src/pages/` |
| Colors and type | `src/styles/global.css` |

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
