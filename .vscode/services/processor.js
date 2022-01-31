class Processor {
	constructor(config, library, octokit, wait) {
		this._config = null;
		this._library = null;
		this._octokit = null;
		this._wait = null;

		this._intialize(config, library, octokit, wait);
	}

	_intialize(config, library, octokit, wait) {
		this._config = config;
		this._library = library;
		this._octokit = octokit;
		this._wait = wait;
	}
}

export default ExtractResponse;
