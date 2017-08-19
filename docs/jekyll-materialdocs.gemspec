# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "Scripts de Automatização IEEE UFABC"
  spec.version       = "0.1.X"
  spec.authors       = ["Adson Batista"]
  spec.email         = ["adson.batista@live.com.com"]

  spec.summary       = "Google Scripts para automatização de processos do Ramo estudantil do IEEE UFABC."
  spec.homepage      = "https://adsonbatista.github.io/Scripts-automatizacao/"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.4"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
