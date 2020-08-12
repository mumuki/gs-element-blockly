lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "gobstones/blockly/version"

Gem::Specification.new do |spec|
  spec.authors       = ["Rodrigo Alfonso", "Federico Aloi"]
  spec.email         = ["info@mumuki.org"]

  spec.summary       = "Gobstones Blockly"
  spec.homepage      = "https://github.com/mumuki/gs-element-blockly"
  spec.license       = "MIT"

  spec.files         = Dir["lib/**/*"] + Dir["app/**/*"] + ["Rakefile", "README.md"]
  spec.test_files    = `git ls-files -- {test,spec}/*`.split("\n")

  spec.name          = "mumuki-gobstones-blockly"
  spec.require_paths = ["lib"]
  spec.version       = Gobstones::Blockly::VERSION

  spec.add_development_dependency "bundler", "~> 2.0.0"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"

  spec.required_ruby_version = '~> 2.3'
end
