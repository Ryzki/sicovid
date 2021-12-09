class TopNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="nav-wrapper">
            <div class="container">
                <div class="nav">
                    <a href="" class="logo">
                        PANTAU C<i class="bx bxs-virus-block bx-tada"></i>VID-19
                    </a>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define('top-nav', TopNavbar);
