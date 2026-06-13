# 临时境外托管与重新个人备案执行清单

适用场景：个体工商户注销无法暂停，现有 `粤ICP备2025431049号-1` 可能无法保留，需要把 `jimmyluojun.com` 临时放到境外服务器，同时重新用个人身份提交 ICP 备案。

当前项目是纯静态站点，部署时只需要上传仓库根目录下的静态文件，不需要 Node.js 构建。

## 1. 立即续费

- 续费 `jimmyluojun.com` 域名。
- 续费当前腾讯云广州轻量应用服务器至少 1 个月，保留回迁余地。
- 如果个体户注销无法暂停，不要再依赖当前备案长期有效。

## 2. 临时境外服务器

推荐选择：

- 腾讯云轻量应用服务器：中国香港地域。
- 或任意境外 VPS：新加坡、日本、美国均可。

最低配置：

- 1 核 CPU。
- 1 GB 内存。
- 20 GB 系统盘。
- Ubuntu 22.04/24.04 或 Debian 12。

安全组/防火墙放通：

- TCP 22：SSH 管理。
- TCP 80：HTTP。
- TCP 443：HTTPS。

## 3. 上传站点文件

在境外服务器上准备目录：

```bash
sudo mkdir -p /var/www/jimmyluojun.com
sudo chown -R "$USER":"$USER" /var/www/jimmyluojun.com
```

从本机项目目录上传这些文件：

```bash
rsync -avz --delete \
  index.html data.js app.jsx components.jsx tweaks-panel.jsx styles.css uploads \
  USER@SERVER_IP:/var/www/jimmyluojun.com/
```

把 `USER` 和 `SERVER_IP` 换成境外服务器的 SSH 用户和公网 IP。

## 4. Nginx 配置

在境外服务器安装 Nginx：

```bash
sudo apt update
sudo apt install -y nginx
```

复制本目录的 `deploy/nginx-overseas.conf` 到服务器：

```bash
sudo cp nginx-overseas.conf /etc/nginx/sites-available/jimmyluojun.com
sudo ln -s /etc/nginx/sites-available/jimmyluojun.com /etc/nginx/sites-enabled/jimmyluojun.com
sudo nginx -t
sudo systemctl reload nginx
```

## 5. DNS 临时切换

在腾讯云 DNSPod/云解析里修改：

- `@` A 记录 -> 境外服务器公网 IP。
- `www` A 记录 -> 境外服务器公网 IP。

TTL 可先设为 600 秒，方便之后回切。

说明：境外服务器访问不要求 ICP 备案。备案空窗期内，不要把域名解析到中国大陆服务器。

## 6. HTTPS

DNS 生效后，在境外服务器申请 Let's Encrypt 证书：

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d jimmyluojun.com -d www.jimmyluojun.com
```

验证续期任务：

```bash
sudo certbot renew --dry-run
```

## 7. 重新个人备案

前置条件：

- 腾讯云账号为本人个人实名认证。
- `jimmyluojun.com` 域名实名信息改为本人个人。
- 域名实名信息与个人备案主体负责人姓名、证件类型、证件号码一致。
- 域名实名完成后等待要求的同步时间，再提交备案。
- 网站内容保持个人作品集/个人内容平台定位，不展示企业经营、公司服务、商务承接等内容。

操作路径：

1. 在腾讯云 ICP 备案控制台确认原备案是否已注销或不可变更。
2. 选择个人备案，备案省份按个人实际可备案条件填写。
3. 提交主体信息、网站信息、人脸核验。
4. 收到工信部短信核验后，24 小时内完成核验。
5. 等待腾讯云初审和管局终审。

## 8. 备案通过后回迁国内服务器

备案通过后：

1. 在腾讯云广州轻量应用服务器部署同一套静态文件。
2. 配置 Nginx 和腾讯云 SSL 证书。
3. DNS 的 `@` 和 `www` A 记录从境外 IP 改回广州服务器公网 IP。
4. 网站页脚按备案要求展示新的个人备案号，并链接到工信部备案系统。

## 9. 当前站点内容检查

当前仓库没有展示旧备案号，也没有直接展示个体工商户主体名称。保持这个状态，直到新的个人备案号通过后再添加备案号。

站点文章里有“外贸”“客户开发”“开发信”等个人经历表达。重新个人备案时，如果腾讯云初审认为偏经营业务，应临时下线或改写这些文章，只保留 AI 学习、创作、工具实践、个人作品集方向。

