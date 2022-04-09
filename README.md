# [criptowiki](https://criptowiki.com)
![criptowiki](/assets/img/screenshots/index.png?raw=true "criptowiki")

Is Bitcoin really a bubble? Is the dollar truly backed by gold? We invite you to ask yourself what money is and why privacy is a right. In addition, learn to protect yourself in cyberspace without the need of prior knowledge.


## For new visitors
To read and learn, please visit [https://criptowiki.com](https://criptowiki.com).


## For developers
In this repository you will find the source code of **criptowiki**, created with [Jekyll](https://jekyllrb.com/), a static site generator. There are 2 important branches:
- **main**: the full source code of the website including the file [.github/workflows/jekyll.yml](.github/workflows/jekyll.yml), which calls the [actions](https://docs.github.com/en/actions/creating-actions/about-actions) to generate the static site, which is available in the `gh-pages` branch.
- **gh-pages**: the actually served built website; its static content is automatically built on every push to the `main` branch.


### Installation
To run and develop this website in your computer:

1. Install [Jekyll](https://jekyllrb.com/docs/installation/).

2. Clone this repository:
```
git clone https://github.com/criptowiki/criptowiki.git
```

3. Install gems:
```
bundle install
```

4. Execute:
```
bundle exec jekyll serve
```

5. Visit:
```
http://localhost:4000
```

### Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/criptowiki/criptowiki. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License
This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.