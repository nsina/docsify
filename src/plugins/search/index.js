import { init as initComponet, update as updateComponent } from './component'
import { init as initSearch } from './search'

const CONFIG = {
  placeholder: 'Type to search',
  noData: 'No Results!',
  paths: 'auto',
  maxAge: 86400000 // 1 day
}

const install = function (hook, vm) {
  const util = Docsify.util
  const opts = vm.config.search || CONFIG

  if (Array.isArray(opts)) {
    CONFIG.paths = opts
  } else if (typeof opts === 'object') {
    CONFIG.paths = Array.isArray(opts.paths) ? opts.paths : 'auto'
    CONFIG.maxAge = util.isPrimitive(opts.maxAge) ? opts.maxAge : CONFIG.maxAge
    CONFIG.placeholder = opts.placeholder || CONFIG.placeholder
    CONFIG.noData = opts.noData || CONFIG.noData
  }

  const isAuto = CONFIG.paths === 'auto'

  hook.mounted(_ => {
    initComponet(CONFIG)
    !isAuto && initSearch(CONFIG, vm)
  })
  hook.doneEach(_ => {
    updateComponent(CONFIG, vm)
    isAuto && initSearch(CONFIG, vm)
  })
}

window.$docsify.plugins = [].concat(install, window.$docsify.plugins)
