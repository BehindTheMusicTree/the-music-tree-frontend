import type { ProjectDefinition } from "./types";
import { GH_PIPELINES } from "./constants";
import behindTheMusicTreeMarkSvg from "@behindthemusictree/brand/marks/behind-the-music-tree/behind-the-music-tree-mark.svg";

const behindTheMusicTreeMarkSrc =
  typeof behindTheMusicTreeMarkSvg === "string"
    ? behindTheMusicTreeMarkSvg
    : behindTheMusicTreeMarkSvg.src;

export const theMusicTreePipelinesProject = {
  slug: "the-music-tree-pipelines",
  name: "TheMusicTreePipelines",
  summary:
    "Data pipelines reconstructing a music genre hierarchy from MusicBrainz and Wikidata, built as a uv workspace monorepo with Polars, DuckDB, and a public SPARQL endpoint.",
  status: "wip",
  iconSrc: behindTheMusicTreeMarkSrc,
  iconAlt: "TheMusicTreePipelines icon",
  overview: [
    { type: "text", text: "A " },
    { type: "bold", text: "uv workspace monorepo" },
    {
      type: "text",
      text: " hosting two independent pipelines, each built on the reference source for its domain: ",
    },
    { type: "bold", text: "musicbrainz" },
    {
      type: "text",
      text: ", a Python/Polars/Postgres ETL over MusicBrainz — the reference for ",
    },
    { type: "bold", text: "song and recording data" },
    { type: "text", text: " — and " },
    { type: "bold", text: "wikidata" },
    {
      type: "text",
      text: ", which ingests Wikidata — the reference for the ",
    },
    { type: "bold", text: "genre taxonomy" },
    { type: "text", text: " — live via its public SPARQL endpoint." },
  ],
  overviewExtended: [
    { type: "bold", text: "musicbrainz" },
    { type: "text", text: " has its " },
    { type: "bold", text: "bronze layer" },
    {
      type: "text",
      text: " built (raw tables to Parquet, queryable directly with DuckDB); its ",
    },
    { type: "bold", text: "silver layer" },
    { type: "text", text: " is not yet built. " },
    { type: "bold", text: "wikidata" },
    { type: "text", text: " ingests the taxonomy live via " },
    { type: "bold", text: "SPARQL" },
    { type: "text", text: ", then runs a 5-step Polars silver pipeline to split it into canonical and regional genre hierarchies, explorable through a " },
    { type: "bold", text: "Jupyter notebook" },
    {
      type: "text",
      text: ". Both silver layers then merge into a ",
    },
    { type: "bold", text: "gold layer" },
    {
      type: "text",
      text: " joining MusicBrainz's song data to Wikidata's genre hierarchy.",
    },
  ],
  features: [
    "Two reference sources, one per domain: MusicBrainz for song and recording data, Wikidata for the genre taxonomy",
    "uv workspace monorepo: one pipeline per source/target data product, shared lockfile and dev toolchain",
    "Ruff, pytest (unit/integration tiers), and pytest-cov enforcing a 90% combined coverage threshold",
    "musicbrainz: bronze layer built (raw tables to Parquet, queryable via DuckDB); silver layer (recording_genre, genre_hierarchy, recording_genre_path) not yet built",
    "musicbrainz: integration-tested against a real MusicBrainz Postgres sample dataset via a vendored musicbrainz-docker submodule",
    "wikidata: walks the taxonomy rooted at Q188451 (\"music genre\") via its P279 (\"subclass of\") and P361 (\"part of\") edges",
    "wikidata: 5-step Polars silver pipeline (item-link enrichment, regional-overview and cascaded regional classification, genre-parent flagging, final pruning) producing canonical and regional genre hierarchies",
    "wikidata: bronze genre tree explored via a Jupyter notebook doing tabular and networkx graph analysis",
    "gold: merges the two silver layers, attaching MusicBrainz songs to the Wikidata genre hierarchy",
  ],
  related: [
    { type: "text", text: "Publishes independent datasets intended for future ingestion by " },
    { type: "link", slug: "the-music-tree-api", text: "TheMusicTreeAPI" },
    { type: "text", text: "." },
  ],
  outboundLinks: [{ source: "static", kind: "github", href: GH_PIPELINES }],
  audience:
    "Data engineers and researchers interested in reconstructing music genre hierarchies from MusicBrainz and Wikidata.",
  documentationLinks: [
    {
      label: "README on GitHub (pipelines, setup, contributing)",
      href: GH_PIPELINES,
    },
    { label: "Organization documentation hub", href: "/docs" },
  ],
  badges: [
    {
      src: "https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white",
      alt: "Python",
      href: "https://www.python.org/",
    },
    {
      src: "https://img.shields.io/badge/Polars-CD792C?style=flat-square&logo=polars&logoColor=white",
      alt: "Polars",
      href: "https://pola.rs/",
    },
    {
      src: "https://img.shields.io/badge/DuckDB-FFF000?style=flat-square&logo=duckdb&logoColor=black",
      alt: "DuckDB",
      href: "https://duckdb.org/",
    },
    {
      src: "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white",
      alt: "PostgreSQL",
      href: "https://www.postgresql.org/",
    },
    {
      src: "https://img.shields.io/badge/SPARQL-4C4C4C?style=flat-square&logo=wikidata&logoColor=white",
      alt: "SPARQL",
      href: "https://www.w3.org/TR/sparql11-query/",
    },
    {
      src: "https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white",
      alt: "Jupyter",
      href: "https://jupyter.org/",
    },
  ],
  architectureSchema: {
    nodes: [
      {
        id: "mb-source",
        label: ["MusicBrainz"],
        sublabel: "SONG REFERENCE",
        variant: "external",
        col: 0,
        row: 0,
        href: "https://musicbrainz.org",
      },
      {
        id: "wd-source",
        label: ["Wikidata"],
        sublabel: "GENRE REFERENCE",
        variant: "external",
        col: 2,
        row: 0,
        href: "https://query.wikidata.org",
      },
      {
        id: "mb-bronze",
        label: ["musicbrainz", "bronze"],
        sublabel: "SONGS",
        col: 0,
        row: 1,
      },
      {
        id: "wd-bronze",
        label: ["wikidata", "bronze"],
        sublabel: "GENRES",
        col: 2,
        row: 1,
      },
      {
        id: "mb-silver",
        label: ["musicbrainz", "silver"],
        sublabel: "NOT YET BUILT",
        col: 0,
        row: 2,
      },
      { id: "wd-silver", label: ["wikidata", "silver"], col: 2, row: 2 },
      {
        id: "gold",
        label: ["gold"],
        sublabel: "SONGS x GENRE TREE",
        variant: "main",
        col: 1,
        row: 3,
      },
      {
        id: "api",
        label: ["TheMusicTree", "API"],
        col: 1,
        row: 4,
        href: "/projects/the-music-tree-api",
      },
    ],
    edges: [
      { from: "mb-source", to: "mb-bronze", label: "raw song dump" },
      { from: "wd-source", to: "wd-bronze", label: "SPARQL genre walk" },
      { from: "mb-bronze", to: "mb-silver", label: "recording genres" },
      { from: "wd-bronze", to: "wd-silver", label: "5-step Polars pipeline" },
      { from: "mb-silver", to: "gold", label: "songs" },
      { from: "wd-silver", to: "gold", label: "canonical + regional tree" },
      { from: "gold", to: "api", label: "future ingestion" },
    ],
  },
} satisfies ProjectDefinition;
