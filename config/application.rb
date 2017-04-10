require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DemoNews
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true

    config.i18n.available_locales = [:"zh-CN", :zh, :en]
    config.i18n.default_locale = "zh-CN"

    # 记录X-Request-Id（方便查看请求在群集中的哪台执行）只有在大型应用部署在群集环境下进行线上调试才可能用到的功能，有什么必要做成默认的功能呢
    config.middleware.delete 'ActionDispatch::RequestId'

    config.middleware.delete 'ActionDispatch::RemoteIp'  # IP SpoofAttack

    # config.middleware.delete 'ActionDispatch::Callbacks' # 在请求前后设置callback
    # config.middleware.delete 'Rack::Lock'    # 多线程加锁，多进程模式下无意义
    # config.middleware.delete 'Rack::Runtime' # 记录X-Runtime（方便客户端查看执行时间）
    # config.middleware.delete 'Rack::ConditionalGet'      # HTTP客户端缓存才会使用
    # config.middleware.delete 'Rack::ETag'    # HTTP客户端缓存才会使用
    # config.middleware.delete 'ActionDispatch::BestStandardsSupport' # 设置X-UA-Compatible, 在nginx上设置
  end
end
