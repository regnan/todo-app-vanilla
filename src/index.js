import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const addIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");
  li.className = "list-row";
  // div生成
  const div = document.createElement("div");
  li.appendChild(div);
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // divタグの子要素に各要素を設定
  const title = document.createElement("p");
  title.innerText = text;
  div.appendChild(title);

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const text = completeButton.parentNode.firstElementChild.innerText;

    const li = document.createElement("li");
    li.className = "list-row";
    const div = document.createElement("div");
    const title = document.createElement("p");
    title.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグ(div)を未完了リストから削除
      document
        .getElementById("complete-list")
        .removeChild(backButton.parentNode.parentNode);
      addIncompleteList(text);
    });

    li.appendChild(div);
    div.appendChild(title);
    div.appendChild(backButton);
    // 未完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });
  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
