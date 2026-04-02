/** Shared outbound URLs and shields.io helper for project modules. */

export const PYPI_AUDIOMETA = "https://pypi.org/project/audiometa-python/";
export const PEPY_AUDIOMETA = "https://www.pepy.tech/project/audiometa-python";
export const GH_AUDIOMETA = "https://github.com/BehindTheMusicTree/audiometa";
export const GH_AUDIOMETA_FRONT =
  "https://github.com/BehindTheMusicTree/audiometa-frontend";
export const GH_GTMT =
  "https://github.com/BehindTheMusicTree/grow-the-music-tree-frontend";
export const GH_API = "https://github.com/BehindTheMusicTree/the-music-tree-api";
export const GH_HTMT =
  "https://github.com/BehindTheMusicTree/hear-the-music-tree-api";

export function shield(path: string): string {
  return `https://img.shields.io/${path}?style=flat-square`;
}
