# word-pinyinizer

Node.js module that transforms chinese words into pinyin.

<b>IMPORTANT NOTE : this module is fetching the data from [writtenchinese](https://www.writtenchinese.com/) front pages. That means there is a huge chance that the data is not available. It returns `null` if the data was not found or if the website is down. USE only for experimental purpose.

It also means you should obtain the rights from the author of the website if you are to use this script in a production environment (again, not recommended).
</b>

## Installation

```yarn add word-pinyinizer```

## Usage

```javascript
import toPinyin from 'word-pinyinizer'

toPinyin('拼音') // returns "pīn yīn"
```

## Command-line

```bash
$ yarn global add word-pinyinizer
$ word-pinyinizer 拼音
pīn yīn
$
```