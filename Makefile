VERSION := "v$$(cat buildpack.toml | grep -m 1 version | sed -e 's/version = //g' | xargs)"

package:
	@tar cvzf node-fn-structured-cloudevent-buildpack-$(VERSION).tgz bin/ buildpack.toml README.md
