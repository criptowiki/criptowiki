# cripto.wiki

**cripto.wiki** is a website that teaches about bitcoin, privacy & cybersecurity.

## Content
In this repository you will find the full source code of the static website, created with [Jekyll](https://jekyllrb.com/).

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "cripto.wiki"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: cripto.wiki
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install cripto.wiki

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/criptowiki/criptowiki. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `cripto.wiki.gemspec` accordingly.

## License

This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.