# CLAUDE.md — lloronaNext180223 (Cantina La Llorona)

Sitio público de Cantina La Llorona. Next.js (Pages Router), desplegado en Vercel.

---

## ⚠️ 1. La rama de producción es `testing`, NO `main`

**Esto contradice la regla global de `~/.claude/CLAUDE.md` (`hector_dev/* → dev → main`). En ESTE repo esa regla no aplica: `dev` y `main` están abandonadas.**

| Rama | Último commit | Estado |
|---|---|---|
| **`testing`** | activo | **Rama de producción.** Vercel despliega a `www.lalloronacantina.com` desde aquí |
| `main` | 12-jun-2026 | 251 commits atrás de `testing`. Sin uso |
| `dev` | 26-ago-2025 | Abandonada hace ~1 año. Sin uso |

**Flujo correcto:**

```
hector_dev/<tema>  →  PR a `testing`  →  merge  →  Vercel despliega producción
```

Un PR a `dev` o a `main` **nunca llega al sitio**.

Al ramificar, sale de `testing` (u `origin/testing`), nunca de `main`/`dev`:

```bash
git fetch origin
git checkout -b hector_dev/<tema> origin/testing
```

**No borrar ramas después del merge** (regla global). Nada de `--delete-branch`.

### Verificar antes de asumir

Comparar la rama local contra `main`/`dev` da falsos positivos de "commits sin subir" — están atrás por diseño. La comparación válida es contra `testing`:

```bash
git rev-list --count origin/testing..HEAD   # 0 = todo subido
```

---

## 2. Vercel

- **Proyecto:** `llorona-next180223`
- **Team / scope:** `hectoremilio1000-s-team` (⚠️ NO `hectoremilio1000s-projects`, ahí no está)
- **Project ID:** `prj_6rh9CiR3f9HYyHaYYwlOYMMTymBO`
- **Dominio:** `www.lalloronacantina.com` / `lalloronacantina.com`
- No hay `.vercel/` local. Para consultar:

```bash
npx vercel ls llorona-next180223 --scope hectoremilio1000-s-team
```

---

## 3. Imágenes

- **Todas las imágenes viven en `public/img/**` en formato `.webp`**, organizadas por tema (`ambiente/`, `comida/`, `platos/`, `eventos/`, `salsa/`, `futbol/`…).
- Migradas desde AWS S3 en el commit `6d4e974`.
- `public/images/` (plural, sin `img`) es la carpeta **vieja** con JPG/PNG pesados sin optimizar. **No usarla en páginas nuevas.**

**Antes de convertir o agregar una imagen, buscar si ya existe en `public/img/`.** Caso real (ago-2026): la landing de chiles en nogada cargaba un JPG de 975 KB desde `public/images/` cuando el mismo archivo en `.webp` (151 KB, 6.5× más ligero) ya existía en `public/img/eventos/`. No había que convertir nada — solo apuntar bien.

```bash
ls public/img/*/ | grep -i <tema>
```

---

## 4. Landings de SEO

El repo tiene ~40 landings en `pages/` para intención de búsqueda (`futbol.js`, `salsa.js`, `jueves_mariachi.js`, `martesnorteno.js`, `cumple.js`, `chiles-en-nogada-cdmx.js`…). Antes de crear una nueva, **buscar si ya existe**:

```bash
grep -ril "<tema>" pages/ components/ | grep -v node_modules
```

### Checklist de una landing nueva

Varias landings viejas nacieron sin `<title>` (le costaron posicionamiento). Toda landing necesita:

- [ ] `<title>` dentro de `<Head>` — con el término de búsqueda real
- [ ] `<meta name="description">`
- [ ] `<link rel="canonical">` a `https://lalloronacantina.com/<slug>/` (**con diagonal final**, el repo usa `trailingSlash: true`)
- [ ] Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) — para el preview en WhatsApp
- [ ] JSON-LD Schema.org (`Restaurant` + `MenuItem`/`Event` según aplique)
- [ ] Imagen `.webp` desde `public/img/`
- [ ] CTA a WhatsApp: `https://wa.me/525549242477?text=<mensaje predefinido>`
- [ ] Versión ES **y** EN (el sitio usa `useAppContext()` con `espa`/`ingles`)
- [ ] Enlaces internos a landings relacionadas

### Slugs

Usar **guiones normales**, nunca guion bajo: Google lee `_` como una sola palabra pegada (`chileennogada`), el `-` sí separa términos.

Al renombrar un slug ya indexado, agregar redirect permanente en `next.config.js` y poner **diagonal final en el `destination`** — sin ella la cadena da 3 saltos en vez de 1:

```js
{ source: '/slug_viejo', destination: '/slug-nuevo/', permanent: true }
```

---

## 5. Verificación antes de declarar "listo"

Este repo **no tiene typecheck ni tests**. El único gate es el build:

```bash
npm run build
```

Para verificar SEO sin abrir el navegador, el HTML prerenderizado queda en `.next/server/pages/`:

```bash
f=.next/server/pages/<slug>.html
grep -o "<title>[^<]*</title>" $f
grep -o 'rel="canonical" href="[^"]*"' $f
```

Para probar redirects hay que usar el server de producción (`next dev` no los resuelve igual):

```bash
npx next start -p 3111 &
curl -s -L -o /dev/null -w "saltos:%{num_redirects} final:%{url_effective}\n" http://localhost:3111/<slug-viejo>/
```

Nota: `out/` es de un export estático viejo y su `sitemap-0.xml` está desactualizado. El build actual genera a `.next/`, no a `out/`.

---

## 6. Detalles del proyecto

- **`next.config.js`**: `trailingSlash: true`, `images.unoptimized: true` (por eso se usa `<img>` y no `next/image`). `output: "export"` está **comentado** — por eso los redirects sí funcionan.
- **Idioma**: `useAppContext()` de `components/context/Context` expone `espa` / `ingles` / `onIdiomaEspa()` / `onIdiomaIngles()`. Las landings renderizan ES y EN condicionalmente en el mismo archivo.
- **Paleta**: verde de acento `#3eeb91`, fondo oscuro `#020a06`, texto claro `#F4F1EE`.
- **WhatsApp de reservas**: `525549242477`.
- **Tracking**: Facebook Pixel (`lib/fpixel`) + Google Ads `AW-11160821109`.
- **Sitemap**: `next-sitemap` corre en `postbuild` con `siteUrl = https://lalloronacantina.com`.

---

_Creado 2026-08-21 durante la mejora SEO de la landing de chiles en nogada (PR #11)._
