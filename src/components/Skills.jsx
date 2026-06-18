import {
  siDocker, siKubernetes, siPodman, siRedhatopenshift,
  siGitlab, siJenkins, siGithubactions, siArgo, siBamboo,
  siTerraform, siAnsible, siPython, siGnubash,
  siPrometheus, siGrafana, siElasticsearch, siDynatrace,
  siLinux, siNginx, siRabbitmq, siRundeck,
  siGooglecloud, siAlibabacloud, siOpenstack,
} from 'simple-icons'

// fill-based custom paths for brands not in simple-icons v16
// stroke-based paths carry { stroke: true }
const custom = {
  azure: {
    path: 'M12.21 2L3.17 21.35H6.5L8.4 16.5h7.15l1.9 4.85h3.33L12.21 2zm0 6.2 2.8 7h-5.6l2.8-7z',
    color: '#0078D4',
    fillRule: 'evenodd',
  },
  aws: {
    path: 'M6.76 8.9a5.26 5.26 0 0 1 10.48.02 3.5 3.5 0 0 1-.24 6.98H7a3.5 3.5 0 0 1-.24-6.99zM8.5 17.8c1 1 2.5 1.7 3.5 1.7s2.5-.7 3.5-1.7',
    color: '#FF9900',
    stroke: true,
  },
  dockerswarm: { path: siDocker.path, color: '#2496ED' },
  cloudformation: {
    path: 'M17 18a5 5 0 0 0 .5-9.97A6 6 0 0 0 6.4 9.5 4 4 0 0 0 7 17.5z',
    color: '#FF9900',
  },
  lgtm: { path: siGrafana.path, color: '#F46800' },
  network: {
    path: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18',
    color: '#A1A1AA',
    stroke: true,
  },
}

function Logo({ si, c, name }) {
  const d = si?.path ?? c?.path
  const color = si ? `#${si.hex}` : c?.color

  const svgStyle = (si || !c?.stroke)
    ? { fill: color }
    : { stroke: color, fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

  return (
    <div className="tech-logo">
      <div className="tech-logo-box">
        <svg
          viewBox="0 0 24 24"
          style={svgStyle}
          fillRule={!si && c?.fillRule ? c.fillRule : undefined}
          aria-label={name}
        >
          <path d={d} />
        </svg>
      </div>
      <span>{name}</span>
    </div>
  )
}

const skills = [
  {
    icon: <svg viewBox="0 0 24 24"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.4 9.5 4 4 0 0 0 7 17.5z"/></svg>,
    label: 'Cloud Platforms',
    logos: [
      { name: 'Azure',         c: custom.azure },
      { name: 'AWS',           c: custom.aws },
      { name: 'Google Cloud',  si: siGooglecloud },
      { name: 'Alibaba Cloud', si: siAlibabacloud },
      { name: 'OpenStack',     si: siOpenstack },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>,
    label: 'Containers & Orchestration',
    logos: [
      { name: 'Docker',        si: siDocker },
      { name: 'Podman',        si: siPodman },
      { name: 'Kubernetes',    si: siKubernetes },
      { name: 'OpenShift',     si: siRedhatopenshift },
      { name: 'Docker Swarm',  c: custom.dockerswarm },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg>,
    label: 'CI/CD & GitOps',
    logos: [
      { name: 'GitLab CI',      si: siGitlab },
      { name: 'Jenkins',        si: siJenkins },
      { name: 'GitHub Actions', si: siGithubactions },
      { name: 'Bamboo',         si: siBamboo },
      { name: 'ArgoCD',         si: siArgo },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>,
    label: 'IaC & Automation',
    logos: [
      { name: 'Terraform',      si: siTerraform },
      { name: 'Ansible',        si: siAnsible },
      { name: 'CloudFormation', c: custom.cloudformation },
      { name: 'Bash',           si: siGnubash },
      { name: 'Python',         si: siPython },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 4-5"/></svg>,
    label: 'Monitoring & Observability',
    logos: [
      { name: 'LGTM-FP',    c: custom.lgtm },
      { name: 'Prometheus', si: siPrometheus },
      { name: 'Grafana',    si: siGrafana },
      { name: 'ELK Stack',  si: siElasticsearch },
      { name: 'Dynatrace',  si: siDynatrace },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 9l3 3-3 3"/><path d="M13 15h4"/></svg>,
    label: 'Systems & Networking',
    logos: [
      { name: 'Linux',      si: siLinux },
      { name: 'Networking', c: custom.network },
      { name: 'Nginx',      si: siNginx },
      { name: 'RabbitMQ',   si: siRabbitmq },
      { name: 'Rundeck',    si: siRundeck },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">Skills</span>
          <h2>My toolbox</h2>
          <p>The technologies I work with day to day.</p>
        </div>
        <div className="divider" />
        <div className="skills">
          {skills.map((s, i) => (
            <div key={s.label} className={`skill-card rv${i % 2 === 1 ? ' d1' : ''}`}>
              <h3>
                <span className="ic">{s.icon}</span>
                {s.label}
              </h3>
              <div className="tech-logos">
                {s.logos.map(l => (
                  <Logo key={l.name} si={l.si} c={l.c} name={l.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
