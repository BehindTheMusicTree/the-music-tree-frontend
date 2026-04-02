import type { ProjectDefinition } from "./types";
import {
  GH_AUDIOMETA,
  PEPY_AUDIOMETA,
  PYPI_AUDIOMETA,
  shield,
} from "./constants";

export const audiometaProject = {
  slug: "audiometa-python",
  name: "AudioMeta Python",
  summary:
    "Unified Python library for reading and writing audio metadata (ID3v1, ID3v2, Vorbis, RIFF). Live web demo available.",
  status: "active",
  iconSrc: "/project-icons/audiometa.svg",
  iconAlt: "AudioMeta app icon",
  overview: [
    {
      type: "text",
      text: "A powerful, unified Python library for reading and writing audio metadata across multiple formats (ID3v1, ID3v2, Vorbis, RIFF).",
    },
  ],
  overviewExtended: [
    {
      type: "text",
      text: "When you work with audio files, consistent tags make search, playlists, and rights a lot less painful. AudioMeta Python is open source: use it in your own projects, read the code, open issues, and send patches like any community-maintained library. It focuses on predictable read/write across common container and tag schemes—whether you run it from the shell, a script, or your own service—so ID3, Vorbis comments, and RIFF INFO stay approachable without every tool reinventing the same edge cases in private.",
    },
  ],
  features: [
    "Reading and writing audio metadata across multiple formats",
    "ID3v1, ID3v2, Vorbis, and RIFF support",
    "Use from scripts, services, or alongside the browser demo",
  ],
  related: [
    { type: "text", text: "Browser UI for the same metadata workflows: " },
    { type: "link", slug: "audiometa-webapp", text: "AudioMeta Webapp" },
    { type: "text", text: "." },
  ],
  outboundLinks: [
    { source: "static", kind: "pypi", href: PYPI_AUDIOMETA },
    { source: "static", kind: "github", href: GH_AUDIOMETA },
    {
      source: "env",
      env: "audiometaWeb",
      kind: "website",
      children: "Web app",
      iconSrc: "/project-icons/audiometa-greyscale.svg",
    },
  ],
  audience:
    "Python developers integrating tag read/write in apps, scripts, or services—and anyone who prefers the terminal: the audiometa CLI covers inspect and edit flows without writing Python.",
  documentationLinks: [
    {
      label: "README on GitHub (install, usage, contributing)",
      href: GH_AUDIOMETA,
    },
    { label: "PyPI package page", href: PYPI_AUDIOMETA },
  ],
  codeSnippets: [
    {
      label: "Library — full read (unified + technical + headers)",
      language: "python",
      code: `from audiometa import get_full_metadata, UnifiedMetadataKey

full_metadata = get_full_metadata(
    "bohemian_rhapsody.mp3",
    include_headers=True,
    include_technical=True,
    include_raw_binary_data=False,
)

um = full_metadata["unified_metadata"]
print("Title:", um.get(UnifiedMetadataKey.TITLE))
print("Artists:", um.get(UnifiedMetadataKey.ARTISTS))

tech = full_metadata["technical_info"]
print("Duration (s):", tech["duration_seconds"])
print("Bitrate (bps):", tech["bitrate_bps"])
print("Sample rate (Hz):", tech["sample_rate_hz"])
print("Channels:", tech["channels"])
print("File size (bytes):", tech["file_size_bytes"])

id3 = full_metadata["headers"]["id3v2"]
print("ID3v2 present:", id3["present"], "version:", id3.get("version"))`,
      result: `Title: Bohemian Rhapsody
Artists: ['Queen']
Duration (s): 354.00
Bitrate (bps): 320000
Sample rate (Hz): 44100
Channels: 2
File size (bytes): 14160000
ID3v2 present: True version: (2, 4, 0)`,
    },
    {
      label: "CLI — install, full read, write",
      language: "bash",
      code: `pip install audiometa-python
audiometa read bohemian_rhapsody.mp3 --format yaml
audiometa write bohemian_rhapsody.mp3 --title "Bohemian Rhapsody (Remastered)" --artist "Queen"`,
      result: `Successfully installed audiometa-python.

unified_metadata:
  title: Bohemian Rhapsody
  artists:
    - Queen
  album: A Night at the Opera
technical_info:
  duration_seconds: 354.00
  bitrate_bps: 320000
  sample_rate_hz: 44100
  channels: 2
  file_size_bytes: 14160000
headers:
  id3v2:
    present: true
    version: [2, 4, 0]

Metadata updated for bohemian_rhapsody.mp3`,
    },
  ],
  codeSnippetsSourceUrl: GH_AUDIOMETA,
  demos: [
    {
      title: "Browser metadata editor",
      description:
        "Upload a file and inspect or edit ID3, Vorbis comments, or RIFF INFO in the web UI—same rules as the Python library.",
      ctaLabel: "Open live demo",
      hrefSource: "env",
      env: "audiometaWeb",
    },
  ],
  badges: [
    {
      src: shield("pypi/v/audiometa-python"),
      alt: "PyPI package version",
      href: PYPI_AUDIOMETA,
    },
    {
      src: shield("pepy/dt/audiometa-python"),
      alt: "Total PyPI downloads (all time, via Pepy)",
      href: PEPY_AUDIOMETA,
    },
    {
      src: shield("pypi/pyversions/audiometa-python"),
      alt: "Supported Python versions on PyPI",
      href: PYPI_AUDIOMETA,
    },
    {
      src: shield("github/stars/BehindTheMusicTree/audiometa"),
      alt: "GitHub stars for BehindTheMusicTree/audiometa",
      href: GH_AUDIOMETA,
    },
  ],
} satisfies ProjectDefinition;
