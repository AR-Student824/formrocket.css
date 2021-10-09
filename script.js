function setUp() {
        var b = document.createElement("div");
        b.innerHTML = `<p style="color:#5c5c5c;display:block;" id="chooseWisely"><pre><code>&lt;link href=&quot;style.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot; /&gt;</code></pre>`;

        swal({ title: 'Create a new form', buttons: false, content: b })
}