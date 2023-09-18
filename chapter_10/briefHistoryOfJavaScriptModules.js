window.emailListModule = {
    renderList() {}
    // ...
}

window.emailComposerModule = {
    renderComposer() {}
    // ...
}
window.appModule = {
    renderApp() {
        window.emailListModule.renderList()
        window.emailComposerModule.renderComposer()
    }
}


$LAB
    .script('/emailBaseModule.js').wait()
    .script('/emailListModule.js')
    .script('/emailComposerModule.js')

