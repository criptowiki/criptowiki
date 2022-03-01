# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "cripto.wiki"
  spec.version       = "0.1.1"
  spec.authors       = ["cripto.wiki"]
  spec.email         = ["criptowiki@protonmail.ch"]

  spec.summary       = "cripto.wiki: descifrando el mundo de Bitcoin, privacidad & ciberseguridad"
  spec.homepage      = "https://cripto.wiki/"
  
  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler", ">= 2.2.10"
  spec.add_development_dependency "rake", "~> 12.0"
end
