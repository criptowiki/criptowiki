# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "criptowiki"
  spec.version       = "0.2"
  spec.authors       = ["criptowiki"]
  spec.email         = ["criptowiki@protonmail.ch"]

  spec.summary       = "criptowiki: descifrando el mundo de Bitcoin, privacidad & ciberseguridad"
  spec.homepage      = "https://criptowiki.com/"
  
  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler", ">= 2.2.10"
  spec.add_development_dependency "rake", "~> 12.0"
end
