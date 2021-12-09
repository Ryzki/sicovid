class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer">
        Sumber data : <a href="https://google.com/" target="_blank">Live Tracking COVID-19 Indonesia</a>
        <br>
        Dibuat dengan <span style="color: #e25555;">&#9829;</span> dari <a href="https://google.com/" target="_blank">Developer</a>
    </div>
        `;
  }
}

customElements.define('end-footer', Footer);
