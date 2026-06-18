export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">Projects</span>
          <h2>Things I&apos;ve built</h2>
          <p>Selected work across deployment, observability, and automation.</p>
        </div>
        <div className="divider" />
        <div className="proj-grid">

          <div className="card proj rv">
            <div className="proj-co">
              <div className="logo">A</div>
              <div>
                <div className="co-name">PT Astra Graphia Information Technology</div>
                <div className="co-role">DevOps Engineer</div>
              </div>
            </div>
            <div className="subproj">
              <h3>Lexus LCEP</h3>
              <ul>
                <li>Built and managed <b>CI/CD deployment</b> using GitLab to development and production environments.</li>
                <li>Deployed applications to <b>Azure Kubernetes Service (AKS)</b>.</li>
                <li>Set up log monitoring with <b>LGTM-FP</b> for real time visibility.</li>
              </ul>
            </div>
            <div className="subproj">
              <h3>Toyota Astra Motor</h3>
              <ul>
                <li>Automated <b>weekly backup and metric collection</b> (database, app service, VM) across Azure, GCP, and Huawei Cloud using custom scripts.</li>
                <li>Automated <b>monthly FinOps cost reporting</b>.</li>
                <li>Scheduled all automation through <b>CI/CD with Azure DevOps</b>.</li>
                <li>Standardized <b>policies, alerts, and metrics</b> through scripting.</li>
              </ul>
            </div>
            <div className="research">
              <b>Research &amp; exploration:</b> LGTM-FP observability stack, GitOps, DevSecOps, and Open Policy Agent (OPA).
            </div>
            <div className="tech">
              <span>Azure DevOps</span><span>GitLab CI</span><span>AKS</span>
              <span>LGTM-FP</span><span>Azure</span><span>GCP</span><span>Huawei Cloud</span>
            </div>
          </div>

          <div className="card proj rv d1">
            <div className="proj-co">
              <div className="logo">O</div>
              <div>
                <div className="co-name">Ordent</div>
                <div className="co-role">DevOps Developer</div>
              </div>
            </div>
            <h3>Qlola Cash Management Platform</h3>
            <div className="proj-client"><span>Client:</span> Bank Rakyat Indonesia (BRI)</div>
            <ul>
              <li>Collaborated in the <b>100 Day Task Initiative</b>, assisting in migrating Bamboo build plans for microservices and improving CI/CD efficiency across multiple squads.</li>
              <li>Designed and implemented <b>CI/CD pipelines</b> using Atlassian Bamboo, streamlining build, test, and deployment.</li>
              <li>Deployed and managed applications on <b>OpenShift</b>, ensuring high availability and scalability of containerized apps.</li>
              <li>Supported <b>production deployments</b>, preparing and validating deployment packages and environment readiness with the Ops team.</li>
              <li>Optimized <b>resource allocation</b> (CPU and memory) to improve performance and reduce cost.</li>
              <li>Practiced <b>Bamboo Specs</b> (pipeline as code), gained hands on experience with <b>RabbitMQ</b> and <b>Rundeck</b>, and used Bitbucket, Git, and Konga for version control and API gateway.</li>
              <li>Presented squad merging and deployment flow improvements to <b>management</b> and cross squad teams, supporting smoother Dev, Ops, and QA collaboration.</li>
            </ul>
            <div className="tech">
              <span>Atlassian Bamboo</span><span>OpenShift</span><span>RabbitMQ</span>
              <span>Rundeck</span><span>Bitbucket</span><span>Konga</span>
            </div>
          </div>

        </div>
        <p className="conf-note rv">Some client details are kept high level. Happy to walk through specifics in a conversation.</p>
      </div>
    </section>
  )
}
