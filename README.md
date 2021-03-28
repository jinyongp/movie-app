# Movie App

ReactJS Fundamentals Course with NomadCoders

## React

Component의 집합으로 functional component와 class component가 있다.

Component는 태그의 attribute 방식으로 prop(property)를 받아 하위 컴포넌트에서 이를 사용할 수 있다.

### stateless components (functional)

```jsx
function App() {
  return (
    <div className="container">
      ...components
    </div>
  );
}

export default App;
```

functional component는 state를 가질 수 없다.(hooks 제외)

### stateful components (class)

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Component created!");
  }

  state = {
    key: value
  }

  methods() {
    setState({ key: new_value });
    setState((current) => ({ key: sth(current.key) }));
  }

  componentDidMount() {
    console.log("Component mounted!");
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  render() {
    console.log("Component rendered!");

    const { key } = this.state;
    return (
      <div className="container">
        <Comp prop={key} />
      </div>
    );
  }
}

export default App;
```

#### Life Cycle

- Mount: `constructor` -> `render` -> `componentDidMound`
- Update: `render` -> `componentDidUpdate`
- Unmount: `componentWillUnmount`

### Props

```jsx
function Movie({ title }) {
  return (
    <div className="movie">
      <span className="movie__title">{title}</span>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Movie title="Movie Title" />
    </div>
  )
}
```

상위 컴포넌트는 App으로부터 하위 컴포넌트인 Movie에 props을 내려 사용할 수 있다.

## Packages

### axios [[docs]](https://xn--xy1bk56a.run/axios/guide/)

>Promise API를 활용하는 HTTP 비동기 통신 라이브러리

```jsx
import axios from "axios";

class App extends React.Component {
  state = {
    movies: null
  }

  async getMovies() {
    const url = "api.url";
    const movies = await axios.get(url);
    this.setState({ movies });
  }

  componentDidMount() {
    getMovies();
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <Movie movies={movies} />
      </div>
    )
  }
}
```

axios의 request가 종료되기 전에 component가 unmount되면 `componentWillUnmount` 메서드에서 비동기 작업을 모두 종료하라는 경고 문구가 나타난다. axios의 `CancelToken`을 사용한다.

[해결방법](https://xn--xy1bk56a.run/axios/guide/cancellation.html)
(`Uncaught (in promise) Cancel...` 에러가 발생하는데 원인을 모르겠음...)

### react-router-dom [[docs]](https://reactrouter.com/web/guides/quick-start)

>Navigational Component의 집합

#### HashRouter

>[HashRouter vs. BrowserRouter](https://worker-k.tistory.com/entry/React-BrowserRouter%EC%99%80-HashRouter%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%A0%95%EB%A6%AC)

`Route`를 묶는다.

`gh-pages`에서 설정이 간편하므로 사용한다.

#### Link

`Router` 안에 존재해야 한다.

라우트를 이동할 때 사용한다. 같은 링크로 이동하려고 하면 동일한 경로를 history에 추가할 수 없다고 경고 문구가 나타나는데 `replace` attribute를 추가하면 된다.

```jsx
<Link to="/" replace>Home</Link>
```

`state`를 함께 보낼 수 있다. `location` 객체에 저장된다. 하위 컴포넌트에서 사용할 수 있다.

```jsx
<Link to={{
  pathname: `/movie/${id}`,
  state: { title, rating, poster },
}}>Movie</Link>
```

#### Route

특정 `path` 라우트에 있을 때 보여질 컴포넌트를 설정한다.

`/about`이 있다면 `/`, `/about` 라우트에 있는 컴포넌트 모두 보여지게 된다. 이를 방지하기 위해서 `exact` attribute를 사용해야 한다.

```jsx
<Route path="/" component={Home} exact />
<Route path="/about" component={About} />
```

### gh-pages

>github page 도메인에 웹사이트를 올릴 수 있다.

1. `yarn add gh-pages`
2. `package.json`에 `homepage` 키를 추가하고 `https://<user_id>.github.io/<repository_name>`로 설정
3. 그리고 `scripts`에 아래 값을 추가

  ```json
  "deploy": "gh-pages -d build",
  "predeploy": "yarn build"
  ```

4. `yarn deploy` 명령어 실행
